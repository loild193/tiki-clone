import React from 'react'
import PropTypes from 'prop-types'

function BannerItem({ imgSrc, imgAlt }) {
	return (
		<div className="banner-item">
			<img src={imgSrc} alt={imgAlt} />
		</div>
	)
}

BannerItem.propTypes = {
	imgSrc: PropTypes.node,
	imgAlt: PropTypes.string,
}

export default BannerItem

