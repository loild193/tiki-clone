import { createContext, useContext, useEffect, useState } from "react";
import cartAPI from "../api/cartAPI";
import debounce from "../utils/optimize";

const CartContext = createContext();

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const fetchCart = async () => {
			const cartResponse = await cartAPI.getCart();
			setCart(cartResponse);
		}
		
		fetchCart();
	}, []);

	// const debounceUpdateCart = debounce(cartAPI.updateCart, 1000);

	const handleCart = (newProduct) => {
		const productIndex = cart.findIndex(product => product.id === newProduct.id);
		
		if (productIndex === -1) {
			setCart([
				...cart,
				newProduct
			]);

			cartAPI.pushToCart(newProduct);
		}
		else {
			setCart([
				...cart.slice(0, productIndex),
				newProduct,
				...cart.slice(productIndex + 1),
			]);

			cartAPI.updateCart(newProduct);
			// debounceUpdateCart(newProduct)
		}
	}

	const deleteProductInCart = (deletedProduct) => {
		const productIndex = cart.findIndex(product => product.id === deletedProduct.id);

		setCart([
			...cart.slice(0, productIndex),
			...cart.slice(productIndex + 1),
		]);

		cartAPI.deleteProduct(deletedProduct);
	}

	return (
		<CartContext.Provider value={{cart, setCart, handleCart, deleteProductInCart}}>
			{ children }
		</CartContext.Provider>
	)
}

// custom hook
function useCart() {
	const context = useContext(CartContext);

	if (context === undefined) {
    throw new Error('useCart must be used within a CountProvider')
  }
  return context
}

export { CartProvider, useCart }