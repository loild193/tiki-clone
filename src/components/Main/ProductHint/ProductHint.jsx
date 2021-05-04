import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import './ProductHint.scss'
import { Button, Container, Grid } from '@material-ui/core'
import { buttonStyle, containerStyle, gridStyle } from '../../../styles/customStyle'
import clsx from 'clsx'
import { Star } from '@material-ui/icons'
import Product from '../../common/Product'
import productAPI from '../../../api/productAPI'
import { getArrayIndex } from '../../../utils/utils'

function ProductHint(props) {
	const containerStyles = containerStyle();
	const gridStyles = gridStyle();
	const buttonStyles = buttonStyle();
	const containerClassName = clsx(containerStyles.homeBanner, containerStyles.productHintHeader);
	const gridClassName = clsx(containerStyles.gridContainer);
	const mdClassName = clsx(gridStyles.mdStyle);
	const buttonClassName = clsx(buttonStyles.seeMoreButton);

	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);

	const fetchProducts = async (page) => {
		const productsResponse = await productAPI.getProducts(page);
	
		return productsResponse;
	}

	useEffect(() => {
		( async () => {
			const response = await fetchProducts(page);
			setProducts(response);
		})();
	}, []);

	const handleFetchMoreProducts = () => {
		setPage(page + 1);

		( async () => {
			const response = await fetchProducts(page + 1);
			setProducts([
				...products,
				...response,
			]);
		})();
	}
	
	const renderHintProducts = () => {
		return getArrayIndex(products).map(num => 
			(<Grid className={gridClassName} key={num} container spacing={2}>
				{
					products.slice(num, num+5).map((product) => 
						<Grid className={mdClassName} key={product.id} item xs={12} md>
							<Link to={{pathname: `/product/${product.id}`}}>
								<Product 
									imgSrc={product.image} 
									imgAlt={product.name} 
									productName={product.name}
									productPrice={product.price}
									productRating={product.rating}
								/>
							</Link>
						</Grid>
					)
				}
			</Grid>)
		)
	}

	return (
		<Container className={containerClassName}>
			<div className="product-hint__header">
				<Star />
				<div className="product-hint__header__text">
					<p>Gợi ý</p>
					<p>Hôm nay</p>
				</div>
			</div>
			<div className="product-hint__wrapper">
				{	renderHintProducts() }
					
				<div className="product-hint__wrapper__button">
					<Button 
						className={buttonClassName} 
						variant="contained"
						onClick={handleFetchMoreProducts}
					>
						Xem Thêm
					</Button>
				</div>
			</div>
		</Container>
	)
}

ProductHint.propTypes = {

}

export default ProductHint

