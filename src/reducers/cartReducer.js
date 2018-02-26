import { FETCH_CART,
 ADD_CART,
 PLUS_CART,
 MINUS_CART,
 CHECKOUT
 } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_CART:
			return action.payload;
		case ADD_CART:
			return action.payload;
		case PLUS_CART:
			return action.payload;
		case MINUS_CART:
			return action.payload;
		case CHECKOUT:
			return action.payload;
		default:
			return state;
	}
}