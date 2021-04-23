import React from 'react'
import PropTypes from 'prop-types'

function TabLink({ imgSrc, imgAlt }) {
	return (
		<div className="quick-tab-link__item">
			<img src={imgSrc} alt={imgAlt} />
			<p>{ imgAlt }</p>
		</div>
	)
}

TabLink.propTypes = {
	imgSrc: PropTypes.node,
	imgAlt: PropTypes.string,
}

export default TabLink

