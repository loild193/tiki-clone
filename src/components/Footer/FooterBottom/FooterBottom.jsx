import React from 'react'
import PropTypes from 'prop-types'

import './FooterBottom.scss'
import FooterBottomImg from '../../../asset/images/bo-cong-thuong-2.png'
import { Container } from '@material-ui/core'

function FooterBottom(props) {
	return (
		<Container>
			<div className="footer-bottom">
				<div className="footer-bottom__left">
					<p>&copy; 2016 - Bản quyền của Công Ty Cổ Phần Ti Ki - Tiki.vn</p>
					<p>Giấy chứng nhận Đăng ký Kinh doanh số 0309532909 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp ngày 06/01/2010</p>
				</div>
				
				<div className="footer-bottom__right">
					<img src={FooterBottomImg} alt="say no to fake product" />
					<img 
						src="https://frontend.tikicdn.com/_desktop-next/static/img/footer/bo-cong-thuong.svg" 
						alt="bo cong thuong" 
					/>
				</div>
			</div>
		</Container>
	)
}

FooterBottom.propTypes = {

}

export default FooterBottom

