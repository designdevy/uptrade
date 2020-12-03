export const SET_CART = 'uptrade/cart/SET_CART'

export const getCart = cart => ({
	type: SET_CART,
	cart,
});

// export const saveCart = (user, cart) => {
//     return async dispatch => {
//         const csrfToken = Cookies.get("XSRF-TOKEN");
//         const res = await fetch("/api/users", {
//             method: "POST",
//             headers: {
//                 'Content-Type': 'application/json',
//                 "X-CSRF-TOKEN": csrfToken,
//             },
            
//             body: JSON.stringify({user, cart}),
        
//         });

        
//         res.data = await res.json()
//         if(res.ok){
//             dispatch(getCart(res.data.cart));
//         }
        
//         return res
//     }
// }

export default function reducer(state = [], action) {
	switch (action.type) {
		case SET_CART:
			return [...action.cart];

		default:
			return state;
	}
}