import { FETCH_PRODUCTS } from './types.js';
const moltin = require('@moltin/sdk');

const Moltin = moltin.gateway({
  client_id: 'Dfn0ya6f5zZsWESQ2WFJfEHARVkLgxochYlDNqfezs',
  client_secret: 'hEVRKU0caM0hfl2Q10jwMX3KC5pqICkpaUXsWmrI9p'
});

export const fetchProducts = () => async dispatch => {
	const res = await Moltin.Products.All();
	dispatch({ type: FETCH_PRODUCTS, payload: res.data });
}