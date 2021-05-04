import axiosClient from "./axiosClient";

const cartAPI = {
  getCart: () => {
    const url = "/cart";

		return axiosClient.get(url);
  },
	pushToCart: (cart) => {
		const url = "/cart";

		return axiosClient.post(url, cart);
	},
	updateCart: (newProduct) => {
		const url = `/cart/${newProduct.id}`;

		return axiosClient.put(url, newProduct);
	},
	deleteProduct: product => {
		const url = `/cart/${product.id}`;

		return axiosClient.delete(url);
	},
};

export default cartAPI;