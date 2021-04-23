import React from 'react'
import PropTypes from 'prop-types'
import { Container } from '@material-ui/core'

import './QuickTabLink.scss'
import TabItemImg from '../../../asset/images/tab-item.png'
import clsx from 'clsx'
import TabLink from '../../common/TabLink'
import { containerStyle } from '../../../styles/customStyle'

function QuickTabLink(props) {
	const containerStyles = containerStyle();
	const containerClassName = clsx(containerStyles.homeBanner);

	return (
		<Container className={containerClassName}>
			<div className="quick-tab-link__wrapper">
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
				<TabLink imgSrc={TabItemImg} imgAlt="Ma giam gia" />
			</div>
		</Container>
	)
}

QuickTabLink.propTypes = {

}

export default QuickTabLink

