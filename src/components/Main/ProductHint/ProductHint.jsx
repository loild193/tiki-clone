import React from 'react'
import PropTypes from 'prop-types'

import './ProductHint.scss'
import { Button, Container, Grid } from '@material-ui/core'
import { buttonStyle, containerStyle, gridStyle } from '../../../styles/customStyle'
import clsx from 'clsx'
import { Star } from '@material-ui/icons'
import Product from '../../common/Product'
import ProductHintImg from '../../../asset/images/product-hint.jpg'

function ProductHint(props) {
	const containerStyles = containerStyle();
	const gridStyles = gridStyle();
	const buttonStyles = buttonStyle();
	const containerClassName = clsx(containerStyles.homeBanner, containerStyles.productHintHeader);
	const gridClassName = clsx(containerStyles.gridContainer);
	const mdClassName = clsx(gridStyles.mdStyle);
	const buttonClassName = clsx(buttonStyles.seeMoreButton);

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
				<Grid className={gridClassName} container spacing={2}>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={3}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={2}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={3}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={3}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={5}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={1}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={1}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={5}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={1}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={1}
						/>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={5}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={1}
						/>
					</Grid>
					<Grid className={mdClassName} item xs={12} md>
						<Product 
							imgSrc={ProductHintImg} 
							imgAlt="product hint" 
							productName="Thức ăn mèo"
							productPrice={400000}
							productRating={1}
						/>
					</Grid>
				</Grid>

				<div className="product-hint__wrapper__button">
					<Button className={buttonClassName} variant="contained" color="primary">
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

