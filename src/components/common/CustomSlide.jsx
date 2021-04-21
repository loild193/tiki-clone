import React from 'react'
import PropTypes from 'prop-types'

function CustomSlide({ imgSrc, imgAlt, price }) {
	return (
		!price ? 
		<div className="custom-slide">
			<img src={imgSrc} alt={imgAlt} />
		</div>
		:
		<div className="custom-slide">
			<div className="custom-slide__image">
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<h4>{price} đ</h4>
			<div className="custom-slide__progress">
				<div className="progress-deal"></div>
				<span>Vừa mở bán</span>
			</div>
		</div>
	)
}

CustomSlide.propTypes = {
	imgSrc: PropTypes.any,
	imgAlt: PropTypes.string,
	price: PropTypes.number,
}

export default CustomSlide