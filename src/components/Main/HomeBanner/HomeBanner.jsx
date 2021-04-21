import React from 'react'
import PropTypes from 'prop-types'

import './HomeBanner.scss'
import { Container } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';
import banner1 from '../../../asset/images/banner1.jpg'
import banner2 from '../../../asset/images/banner2.jpg'
import banner3 from '../../../asset/images/banner3.jpg'
import bannerSale from '../../../asset/images/banner-sale.jpg'
import CustomSlide from '../../common/CustomSlide';


function HomeBanner(props) {
	return (
		<Container style={{ padding: "0px"}}>
			<div className="home-banner__wrapper">
				<Carousel animation="slide" autoPlay={false}>
					<CustomSlide imgSrc={banner1} alt="test" />
					<CustomSlide imgSrc={banner2} alt="test" />
					<CustomSlide imgSrc={banner3} alt="test" />
				</Carousel>
				<div className="home-banner__right">
					<img src={bannerSale} alt="banner-sale" />
				</div>
			</div>
		</Container>
	)
}

HomeBanner.propTypes = {

}

export default HomeBanner

