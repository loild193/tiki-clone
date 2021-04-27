import React from 'react'
import PropTypes from 'prop-types'

import './Email.scss'

import MailImg from '../../../asset/images/mail.png'
import { Button, Container } from '@material-ui/core'
import { buttonStyle, containerStyle } from '../../../styles/customStyle'
import clsx from 'clsx'

function Email(props) {
	const containerStyles = containerStyle();
	const buttonStyles = buttonStyle();
	const containerClassName = clsx(containerStyles.middleBanner, containerStyles.emailContainer);
	const buttonClassName = clsx(buttonStyles.registerButton);
	return (
		<Container className={containerClassName}>
			<div className="email__info">
				<img src={MailImg} alt="Email" />
				<div className="email__info__text">
					<p>Đăng ký nhận bản tin Tiki</p>
					<p>Đừng bỏ lỡ hàng ngàn sản phẩm và chương trình siêu hấp dẫn</p>
				</div>
			</div>

			<div className="email__register">
				<input placeholder="Địa chỉ email của bạn" type="text" />
				<Button className={buttonClassName} variant="contained">Đăng ký</Button>
			</div>
		</Container>
	)
}

Email.propTypes = {

}

export default Email