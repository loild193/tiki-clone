import React from 'react'
import PropTypes from 'prop-types'
import { ArrowForwardIos } from '@material-ui/icons'
import ModifyCount from './ModifyCount'
import { iconStyle } from '../../styles/customStyle'
import clsx from 'clsx'

function ProductInCart(props) {
	const { product, onProductInCartDecrease, onProductInCartIncrease, onDeleteProductInCart } = props;
	const iconStyles = iconStyle();
	const iconClassName = clsx(iconStyles.arrowForwardIos);

	const handleOnDecreaseModifyCount = (product) => {
		onProductInCartDecrease(product)
	}

	const handleOnIncreaseModifyCount = (product) => {
		onProductInCartIncrease(product)
	}
	
	const handleDeleteProduct = () => {
		onDeleteProductInCart(product);
	}

	return (
		<div className="product-in-cart">
			<p className="product-in-cart__shop">
				Shop
				<ArrowForwardIos className={iconClassName} />
			</p>
			<div className="product-in-cart__detail">
				<div className="product-in-cart__detail__left">
					<img src={product.image} alt={product.name} />
					<div className="product-in-cart__detail__left__desc">
						<p className="product-in-cart__detail__left__desc__name">
							{ product.name }
						</p>
						<p className="product-in-cart__detail__left__desc__activity">
							<span onClick={handleDeleteProduct}>Xóa</span>
							<span>Để dành mua sau</span>
						</p>
					</div>
				</div>
				<div className="product-in-cart__detail__right">
					<div className="product-in-cart__price">
						{ product.price * product.count } đ
					</div>
					<ModifyCount
						product={product} 
						productCount={product.count}
						onDecreaseModifyCount={handleOnDecreaseModifyCount}
						onIncreaseModifyCount={handleOnIncreaseModifyCount}
					/>
				</div>
			</div>
		</div>
	)
}

ProductInCart.propTypes = {
	product: PropTypes.object,
	onProductInCartDecrease: PropTypes.func,
	onProductInCartIncrease: PropTypes.func,
	onDeleteProductInCart: PropTypes.func,
}

export default ProductInCart

