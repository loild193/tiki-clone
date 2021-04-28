import React from 'react'
import PropTypes from 'prop-types'

import './FooterTop.scss'
import VisaImg from '../../../asset/images/visa.svg'
import FacebookImg from '../../../asset/images/facebook.svg'
import AppStoreImg from '../../../asset/images/appstore.png'
import PlayStoreImg from '../../../asset/images/playstore.png'

import { Container } from '@material-ui/core'

function FooterTop(props) {
	return (
		<Container>
			<ul className="footer-top">
				<li className="footer-top__support">
					<ul>
						<li>HỖ TRỢ KHÁCH HÀNG</li>
						<li>Hotline chăm sóc khách hàng: 1900-6035</li>
						<li>(1000đ/phút , 8-21h kể cả T7, CN)</li>
						<li><a href="#">Các câu hỏi thường gặp</a></li>
						<li><a href="#">Gửi yêu cầu hỗ trợ</a></li>
						<li><a href="#">Hướng dẫn đặt hàng</a></li>
						<li><a href="#">Phương thức vận chuyển</a></li>
						<li><a href="#">Chính sách đổi trả</a></li>
						<li><a href="#">Chính sách hàng nhập khẩu</a></li>
						<li>Hỗ trợ khách hàng: 
							<a href="#">hotro@tiki.vn</a></li>
						<li>Báo lỗi bảo mật: 
							<a href="#">security@tiki.vn</a>
						</li>
					</ul>
				</li>
				<li className="footer-top__about">
					<ul>
						<li>VỀ TIKI</li>
						<li><a href="#">Giới thiệu Tiki</a></li>
						<li><a href="#">Tuyển Dụng</a></li>
						<li><a href="#">Chính sách bảo mật thanh toán</a></li>
						<li><a href="#">Chính sách bảo mật thông tin cá nhân</a></li>
						<li><a href="#">Chính sách giải quyết khiếu nại</a></li>
						<li><a href="#">Điều khoản sử dụng</a></li>
						<li> <a href="#">Giới thiệu Tiki Xu</a></li>
						<li><a href="#">Bán hàng doanh nghiệp</a></li>
					</ul>
				</li>
				<li className="footer-top__link">
					<ul>
						<li>HỢP TÁC VÀ LIÊN KẾT</li>
						<li><a href="#">Quy chế hoạt động Sàn GDTMĐT</a></li>
						<li><a href="#">Bán hàng cùng Tiki</a></li>
					</ul>
				</li>
				<li className="footer-top__pay-method">
					<ul>
						<li>PHƯƠNG THỨC THANH TOÁN</li>
						<li>
							<img src={VisaImg} alt="Visa" />
							<img src={VisaImg} alt="Visa" />
							<img src={VisaImg} alt="Visa" />
							<img src={VisaImg} alt="Visa" />
							<img src={VisaImg} alt="Visa" />
							<img src={VisaImg} alt="Visa" />
						</li>
					</ul>
				</li>
				<li className="footer-top__connection">
					<ul>
						<li>KẾT NỐI VỚI CHÚNG TÔI</li>
						<li>
							<img src={FacebookImg} alt="Facebook" />
							<img src={FacebookImg} alt="Facebook" />
							<img src={FacebookImg} alt="Facebook" />
						</li>
						<li>TẢI ỨNG DỤNG TRÊN ĐIỆN THOẠI</li>
						<li>
							<a href="#">
								<img src={AppStoreImg} alt="app store" />
							</a>
							</li>
						<li>
							<a href="#">
								<img src={PlayStoreImg} alt="play store" />
							</a>
						</li>
					</ul>
				</li>
			</ul>
		</Container>
	)
}

FooterTop.propTypes = {

}

export default FooterTop

