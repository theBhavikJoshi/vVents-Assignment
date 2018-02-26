import axios from 'axios';
import wkhtmltopdf from 'wkhtmltopdf';

import { FETCH_PRODUCTS, 
	FETCH_PRODUCT,
	FETCH_CART, 
	ADD_CART, 
	REMOVE_CART,
	PLUS_CART,
	MINUS_CART,
	CHECKOUT
} from './types.js';
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: 'Dfn0ya6f5zZsWESQ2WFJfEHARVkLgxochYlDNqfezs',
  client_secret: 'hEVRKU0caM0hfl2Q10jwMX3KC5pqICkpaUXsWmrI9p'
});

export const fetchProducts = () => async dispatch => {
	const res = await Moltin.Products.All();
	dispatch({ type: FETCH_PRODUCTS, payload: res.data });
}

export const fetchAProduct = (id) => async dispatch => {
	const res = await Moltin.Products.Get(id);
	dispatch({ type: FETCH_PRODUCT, payload: res.data });
}

export const fetchCart = () => async dispatch => {
	const res = await Moltin.Cart('abc').Items();
	dispatch({ type: FETCH_CART, payload: res.data });
}

export const addToCart = (id) => async dispatch => {
	const res = await Moltin.Cart("abc").AddProduct(id, 1);
	dispatch({ type: ADD_CART, payload: res.data });
}

export const removeFromCart = (id) => async dispatch => {
	const res = await Moltin.Cart("abc").AddProduct(id, 1);
	dispatch({ type: REMOVE_CART, payload: res.data });
}

export const plusCart = (id, quantity) => async dispatch => {
	const res = await Moltin.Cart('abc').UpdateItemQuantity(id, quantity + 1);
	dispatch({ type: PLUS_CART, payload: res.data });
}

export const minusCart = (id, quantity) => async dispatch => {
	const res = await Moltin.Cart('abc').UpdateItemQuantity(id, quantity - 1);
	dispatch({ type: MINUS_CART, payload: res.data });
}

export const checkout = (data, history) => async dispatch => {
	const res = await Moltin.Cart('abc').Checkout(data.customer, data.billing_address, data.shipping_address);
	history.push({
	  pathname: '/payment',
	  search: `?id=${res.data.id}`
	});
	dispatch({ type: CHECKOUT, payload: res.data });
};

export const payment = (id, data, history) => async dispatch => {
	const res = await Moltin.Orders.Payment(id, data);
	if(res) {
		await Moltin.Cart("{abc}").Delete();
		const orderReference = await Moltin.Orders.Get(id);
		// Tried for PDF Generation
		// const html = `<h1 className="center">Invoice</h1>
		// 							<h2 className="center">VVENTS</h2>
		// 							<h3 className="center">LIVE VIDEO EVENTS FOR EVERY OCCASION</h3>
		// 							<p className="right">Order ID : <i>${orderReference.data.id}</i></p>
		// 							<p className="left" style={{fontSize : '18'}}>Payment Status : <i>${orderReference.data.payment}</i></p>
		// 							<p className="left">Order Status: <i>${orderReference.data.status}</i></p>
		// 							<h5 className="center"><i>${orderReference.data.customer.name}</i></h5>
		// 							<h6 className="center"><i>${orderReference.data.customer.email}</i></h6>
		// 							<p className="center">......................</p>
		// 							<p className="center">Signature</p>`;
		// await wkhtmltopdf(html, { output: 'out.pdf' });
		if(orderReference.data) {
			const saveTransaction = await axios.post('https://vvents-backend.herokuapp.com/saveTransaction', {
				id: orderReference.data.id,
				payment: orderReference.data.payment,
				status: orderReference.data.status,
				type: orderReference.data.order,
				customerName: orderReference.data.customer.name,
				customerEmail: orderReference.data.customer.email
			});
			console.log(saveTransaction);
		}
	}
	history.push('/success');
}