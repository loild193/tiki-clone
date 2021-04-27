import React from 'react'
import PropTypes from 'prop-types'

function ItemSearch({ imgSrc, imgAlt, searchWord, productsCount }) {
	return (
		<div className="hot-search__item">
			<div className="hot-search__item__images">
				<img src={imgSrc} alt={imgAlt} />
				<img src={imgSrc} alt={imgAlt} />
				<img src={imgSrc} alt={imgAlt} />
			</div>
			<div className="hot-search__item__info">
				<p className="info__search-word">{ searchWord }</p>
				<p className="info__products-count">{ productsCount } sản phẩm</p>
			</div>
		</div>
	)
}

ItemSearch.propTypes = {
	imgSrc: PropTypes.node,
	imgAlt: PropTypes.string,
	searchWord: PropTypes.string,
	productsCount: PropTypes.number,
}

export default ItemSearch

