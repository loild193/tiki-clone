import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'

import ProductSaleImg from '../../../asset/images/product-sale.jpg';
import './MiddleBanner.scss';
import BannerItem from '../../common/BannerItem';
import { containerStyle } from '../../../styles/customStyle';
import clsx from 'clsx';

function MiddleBanner(props) {
	const containerStyles = containerStyle();
	const containerClassName = clsx(containerStyles.middleBanner);

	return (
		<Container className={containerClassName}>
			<div className="middle-banner__wrapper">
				<BannerItem imgSrc={ProductSaleImg} imgAlt="product sale" />
				<BannerItem imgSrc={ProductSaleImg} imgAlt="product sale" />
				<BannerItem imgSrc={ProductSaleImg} imgAlt="product sale" />
				<BannerItem imgSrc={ProductSaleImg} imgAlt="product sale" />
			</div>
		</Container>
	)
}

MiddleBanner.propTypes = {

}

export default MiddleBanner

