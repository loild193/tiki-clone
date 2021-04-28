import React from 'react'
import PropTypes from 'prop-types'

import { Container } from '@material-ui/core'
import FooterTop from './FooterTop/FooterTop'
import { containerStyle } from '../../styles/customStyle'
import clsx from 'clsx'
import FooterMiddle from './FooterMiddle/FooterMiddle'
import FooterBottom from './FooterBottom/FooterBottom'

function Footer(props) {
	const containerStyles = containerStyle();
	const containerClassName = clsx(containerStyles.footer);

	return (
		<Container className={containerClassName} maxWidth="xl">
			<FooterTop />
			<FooterMiddle />
			<FooterBottom />
		</Container>
	)
}

Footer.propTypes = {

}

export default Footer

