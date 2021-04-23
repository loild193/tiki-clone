import React from 'react'
import PropTypes from 'prop-types'

import './HotCategory.scss';
import HotCategoryImg from '../../../asset/images/category-hot.jpg'
import { Container } from '@material-ui/core';
import TabLink from '../../common/TabLink';
import { containerStyle } from '../../../styles/customStyle';
import clsx from 'clsx';

function HotCategory(props) {
	const containerStyles = containerStyle();
	const containerClassName = clsx(containerStyles.homeBanner);

	return (
		<Container className={containerClassName}>
			<p className="hot-category__title">Danh mục nổi bật</p>
			<div className="hot-category__wrapper">
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
				<TabLink imgSrc={HotCategoryImg} imgAlt="hot category" />
			</div>
		</Container>
	)
}

HotCategory.propTypes = {

}

export default HotCategory

