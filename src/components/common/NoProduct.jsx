import React from 'react'
import PropTypes from 'prop-types'

import NoProductImg from '../../asset/images/no-product.png'
import { Button, Container } from '@material-ui/core'
import { buttonStyle, containerStyle } from '../../styles/customStyle'
import clsx from 'clsx'
import { useHistory } from 'react-router'

function NoProduct(props) {
	const history = useHistory();

	const containerStyles = containerStyle();
	const buttonStyles = buttonStyle();
	const containerClassName = clsx(containerStyles.noProduct);
	const buttonClassName = clsx(buttonStyles.continueToBuy);

	const handleToProductPage = () => {
		history.push('/');
	}

	return (
		<Container className={containerClassName}>
			<div className="no-product__wrapper">
				<img src={NoProductImg} alt="no product" />
				<p>Không có sản phẩm nào trong giỏ hàng của bạn.</p>
				<Button 
					variant="contained" 
					className={buttonClassName}
					onClick={handleToProductPage}
				>
					Tiếp tục mua sắm
				</Button>
			</div>
		</Container>
	)
}

NoProduct.propTypes = {

}

export default NoProduct

