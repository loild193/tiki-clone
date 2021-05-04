export const getTotalProducts = (cart) => {
	return cart.reduce((acc, cur) => acc + cur.count, 0);
}

export const caculateTotalPrice = (cart) => {
	return cart.reduce((acc, cur) => acc + cur.count * cur.price, 0);
}