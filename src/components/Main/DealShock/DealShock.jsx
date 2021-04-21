import React from 'react'
import PropTypes from 'prop-types'

import './DealShock.scss'
import { Container } from '@material-ui/core'
import { ArrowForwardIos } from '@material-ui/icons'
import Carousel from 'react-material-ui-carousel'
import CustomSlide from '../../common/CustomSlide'

import DealShockImg from '../../../asset/images/deal-shock.png'
import { containerStyle } from '../../../styles/customStyle';
import clsx from 'clsx';

function DealShock(props) {
	const containerStyles = containerStyle();
	const containerClassname = clsx(containerStyles.homeBanner);

	return (
		<Container className={containerClassname}>
			<div className="dealshock__header">
				<h3 className="dealshock__header__title">Giá sốc hôm nay</h3>
				<div className="dealshock__header__timer">
					<span>01</span>
					:
					<span>00</span>
					:
					<span>59</span>
					<ArrowForwardIos />
				</div>
			</div>

			<Carousel className="dealshock__carousel" animation="slide" autoPlay={false}>
				<div className="dealshock__carousel__list">
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
				</div>
				<div className="dealshock__carousel__list">
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
					<CustomSlide imgSrc={DealShockImg} alt="test" price={200000} />
				</div>
			</Carousel>
		</Container>
	)
}

DealShock.propTypes = {

}

export default DealShock

