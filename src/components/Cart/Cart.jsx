import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './Cart.scss'
import { Button, Container } from '@material-ui/core'
import { useCart } from '../../contexts/Cart'
import { caculateTotalPrice, getTotalProducts } from '../../utils/utils.js'
import ProductInCart from '../common/ProductInCart'
import { Info, LocalPlay } from '@material-ui/icons'
import { buttonStyle, containerStyle, iconStyle } from '../../styles/customStyle'
import clsx from 'clsx'
import NoProduct from '../common/NoProduct'

function Cart(props) {
	const { cart, handleCart, deleteProductInCart } = useCart();

	const containerStyles = containerStyle();
	const iconStyles = iconStyle();
	const buttonStyles = buttonStyle();
	const containerClassName = clsx(containerStyles.productInCartContainer);
	const infoIconClassName = clsx(iconStyles.infoIcon);
	const buttonClassName = clsx(buttonStyles.buyButton);

	console.log(cart)

	const handleOnProductInCartDecrease = (product) => {
		const modifiedProduct = {
			...product,
			count: product.count - 1,
		}
		handleCart(modifiedProduct);
	}

	const handleOnProductInCartIncrease = (product) => {
		const modifiedProduct = {
			...product,
			count: product.count + 1,
		}
		handleCart(modifiedProduct);
	}

	const handleOnDeleteProductInCart = (product) => {
		deleteProductInCart(product);
	}

	return (
		<Container className={containerClassName}>
			<span>GIỎ HÀNG ({ getTotalProducts(cart) } sản phẩm)</span>
			{
				cart.length === 0 ?
				<NoProduct />
				:
				<div className="cart__wrapper">
					<div className="cart__wrapper__left">
						{
							cart.map(product => (
								<ProductInCart 
									key={product.id}
									product={product}
									onProductInCartDecrease={handleOnProductInCartDecrease}
									onProductInCartIncrease={handleOnProductInCartIncrease}
									onDeleteProductInCart={handleOnDeleteProductInCart}
								/>
							))
						}
					</div>
					<div className="cart__wrapper__right">
						<div className="cart__wrapper__right__coupon">
							<p className="coupon__top">
								<span>Tiki khuyến mãi</span>
								<span>
									Có thể chọn 2
									<Info className={infoIconClassName} />
								</span>
							</p>
							<p className="coupon__bottom">
								<LocalPlay />
								<span>Chọn hoặc nhập Khuyến mãi</span>
							</p>
						</div>
						<div className="cart__wrapper__right__price">
							<div className="price__top">
								<span>Tạm tính</span>
								<span>{caculateTotalPrice(cart)} đ</span>
							</div>
							<div className="price__bottom">
								<span>Thành tiền</span>
								<span className="final-price">
									{caculateTotalPrice(cart)} đ
									<span>(Đã bao gồm VAT nếu có)</span>
								</span>
							</div>
						</div>
						<Button
							className={buttonClassName}
							variant="contained"
						>
							Tiến hành đặt hàng
						</Button>
					</div>
				</div>
			}
		</Container>
	)
}

Cart.propTypes = {

}

export default Cart

