export const getTotalProducts = (cart) => {
	return cart.reduce((acc, cur) => acc + cur.count, 0);
}

export const caculateTotalPrice = (cart) => {
	return cart.reduce((acc, cur) => acc + cur.count * cur.price, 0);
}

export const getArrayIndex = (products) => {
	let array = [];

	products.forEach((product, index) => {
		if (index % 5 === 0) {
			array.push(index);
		}
	})

	return array;
}