import React from 'react'
import PropTypes from 'prop-types'

function ModifyCount({ product, onDecreaseModifyCount, onIncreaseModifyCount }) {
	const decreaseButtonClassname = `${product?.count === 1 && "button-disabled"} 
	modify-count__button`

	const handleOnDecreaseModifyCount = () => {
		onDecreaseModifyCount(product);
	}

	const handleOnIncreaseModifyCount = () => {
		onIncreaseModifyCount(product);
	}

	return (
		<div className="modify-count">
			<button 
				className={decreaseButtonClassname}
				onClick={handleOnDecreaseModifyCount}
			>
				-
			</button>
			<span>{ product?.count }</span>
			<button 
				className="modify-count__button"
				onClick={handleOnIncreaseModifyCount}
			>
				+
			</button>
		</div>
	)
}

ModifyCount.propTypes = {
	productId: PropTypes.number,
	productCount: PropTypes.number,
	onDecreaseModifyCount: PropTypes.func,
	onIncreaseModifyCount: PropTypes.func,
}

export default ModifyCount

