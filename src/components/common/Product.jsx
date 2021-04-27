import React from 'react'
import PropTypes from 'prop-types'

import Rating from '@material-ui/lab/Rating';
import { ratingStyle } from '../../styles/customStyle';
import clsx from 'clsx';

function Product({ imgSrc, imgAlt, productName, productPrice, productRating }) {
	const ratingStyles = ratingStyle();
	const ratingClassName = clsx(ratingStyles.ratingSize);
	
	return (
		<div className="product">
			<img src={imgSrc} alt={imgAlt} />
			<div className="product__info">
				<p>{productName}</p>
				{ productRating && 
					<div className="product__info__rating">
						<Rating
							className={ratingClassName}
							name="read-only" 
							value={productRating} 
							readOnly
						/>
						<span className="rating-value">({ productRating })</span>
					</div>
				}
				<p>{productPrice}</p>
			</div>
		</div>
	)
}

Product.propTypes = {
	imgSrc: PropTypes.node,
	imgAlt: PropTypes.string,
	productName: PropTypes.string,
	productPrice: PropTypes.number,
	productRating: PropTypes.number,
}

export default Product

