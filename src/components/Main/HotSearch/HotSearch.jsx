import React from 'react'
import PropTypes from 'prop-types'

import './HotSearch.scss';
import HotSearchImg from '../../../asset/images/search-hot.jpg';
import { Container } from '@material-ui/core';
import { Cached, Search } from '@material-ui/icons';
import ItemSearch from '../../common/ItemSearch';
import { containerStyle } from '../../../styles/customStyle';
import clsx from 'clsx';

function HotSearch(props) {
	const containerStyles = containerStyle();
	const containerClassname = clsx(containerStyles.homeBanner);

	return (
		<Container className={containerClassname}>
			<div className="hot-search__header">
				<div className="hot-search__header__left">
					<Search />
					<p>Tìm kiếm nổi bật</p>
				</div>
				<div className="hot-search__header__right">
					<Cached />
					<p>Xem thêm</p>
				</div>
			</div>

			<div className="hot-search__wrapper">
				<ItemSearch 
					imgSrc={HotSearchImg}
					imgAlt="product search hot"
					searchWord="kẹo"
					productsCount={400}
				/>
				<ItemSearch 
					imgSrc={HotSearchImg}
					imgAlt="product search hot"
					searchWord="kẹo"
					productsCount={400}
				/>
				<ItemSearch 
					imgSrc={HotSearchImg}
					imgAlt="product search hot"
					searchWord="kẹo"
					productsCount={400}
				/>
				<ItemSearch 
					imgSrc={HotSearchImg}
					imgAlt="product search hot"
					searchWord="kẹo"
					productsCount={400}
				/>
			</div>
		</Container>
	)
}

HotSearch.propTypes = {

}

export default HotSearch

