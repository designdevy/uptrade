export const SET_CART = 'uptrade/cart/SET_CART'

export const getCart = cart => ({
	type: SET_CART,
	cart,
});

export default function reducer(state = [], action) {
	switch (action.type) {
		case SET_CART:
			return [...action.cart];

		default:
			return state;
	}
}