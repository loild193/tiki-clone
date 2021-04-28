import React from 'react'
import PropTypes from 'prop-types'

import './FooterMiddle.scss'

function FooterMiddle(props) {
	return (
		<div className="footer-middle">
			<span className="footer-middle__address-text">Địa chỉ văn phòng:</span>
			<span className="footer-middle__address">52 Út Tịch, phường 4, quận Tân Bình, thành phố Hồ Chí Minh</span>
			<p className="footer-middle__additon-text">
				Tiki nhận đặt hàng trực tuyến và giao hàng tận nơi, chưa hỗ trợ mua và nhận hàng trực tiếp tại văn phòng hoặc trung tâm xử lý đơn hàng
			</p>
		</div>
	)
}

FooterMiddle.propTypes = {

}

export default FooterMiddle

