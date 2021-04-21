import React from 'react'
import PropTypes from 'prop-types'

import './Header.scss'
import { Container } from '@material-ui/core'
import logo from '../../asset/images/logo.png'
import { Search, Menu, ArrowDropDown, Person, ShoppingCart } from '@material-ui/icons';
import clsx from 'clsx'
import { containerStyle, iconStyle } from '../../styles/customStyle'

function Header(props) {
	const containerStyles = containerStyle();
	const iconStyles = iconStyle();
	const containerClassname = clsx(containerStyles.headerRoot);
	const containerHeaderClassname = clsx(containerStyles.header, "header");
	const menuIconClassname = clsx(iconStyles.menu);
	const arrowDropdownIconClassname = clsx(iconStyles.arrowDropDown);

	return (
		<Container className={containerClassname} maxWidth="xl">
			<Container className={containerHeaderClassname}>
				<div className="header__logo">
					<img src={logo} alt="Tiki Logo" />
				</div>

				<div className="header__category">
					<Menu className={menuIconClassname} />
					<div className="header__category__text">
						<p>Danh mục</p>
						<p>
							Sản Phẩm
							<ArrowDropDown className={arrowDropdownIconClassname} />
						</p>
					</div>
				</div>

				<div className="header__search">
					<div className="header__search__wrapper">
						<input type="text" placeholder="Tìm sản phẩm, danh mục hay thương hiệu mong muốn..." />
						<button>
							<Search />
							Tìm kiếm
						</button>
					</div>
					<div className="header__search__hint">
						<span>sữa rửa mặt</span>
						<span>sạc dự phòng</span>
						<span>sách kỹ năng sống</span>
					</div>
				</div>

				<div className="header__account">
					<Person />
					<div className="header__account__text">
						<span>Đăng nhập / Đăng ký</span>
						<span>
							Tài khoản
							<ArrowDropDown />
						</span>
					</div>
				</div>
				
				<div className="header__cart">
					<div className="header__cart__wrapper">
						<ShoppingCart />
						<span className="cart-badge">0</span>
					</div>
					<span>Giỏ Hàng</span>
				</div>
			</Container>
		</Container>
	)
}

Header.propTypes = {

}

export default Header

