import React from 'react'
import PropTypes from 'prop-types'

import './BottomBanner.scss';
import BottomBannerImg from '../../../asset/images/bottom-banner.jpg';
import { Container } from '@material-ui/core';
import { containerStyle } from '../../../styles/customStyle';
import clsx from 'clsx';
import BannerItem from '../../common/BannerItem';

function BottomBanner(props) {
	const containerStyles = containerStyle();
	const containerClassName = clsx(containerStyles.middleBanner)

	return (
		<Container className={containerClassName}>
			<div className="bottom-banner__wrapper">
				<BannerItem imgSrc={BottomBannerImg} imgAlt="product sale" />
				<BannerItem imgSrc={BottomBannerImg} imgAlt="product sale" />
				<BannerItem imgSrc={BottomBannerImg} imgAlt="product sale" />
			</div>
		</Container>
	)
}

BottomBanner.propTypes = {

}

export default BottomBanner

