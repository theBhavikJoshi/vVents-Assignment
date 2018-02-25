import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import CartCard from './CartCard';

class Cart extends Component {
	componentWillMount() {
		this.props.fetchCart();
	}

	renderCartItems(data) {
		let html ='';
		console.log(data);
		if(data.length > 0) {
			html = data.map(cartItem => {
				return <CartCard 
						key={cartItem.name}
		    		name={cartItem.name}
		    		id={cartItem.id}
		    		product_id={cartItem.product_id}
		    		unit_price={cartItem.meta.display_price.with_tax.unit.formatted}
		    		value={cartItem.meta.display_price.with_tax.value.formatted}
		    		quantity={cartItem.quantity}
			    />
			});
		}
		return html;
	}

	render() {
		return (
	    <div>
	    	{this.renderCartItems(this.props.cart)}
	    	
	    	{this.props.cart.length > 0 ? (
		      <div className="card-action right">
		        <Link to='/checkout' className="waves-effect waves-light btn purple darken-3" style={{ margin: 5 }}><i className="material-icons left">arrow_forward</i> Checkout</Link>
		      </div>
		    ) : (
		      <h4 className="center-align">Sorry! Nothing in your Cart</h4>
		    )}
	    </div>
		);
	}
}

function mapStateToProps ({ cart }) {
	return { cart };
}

export default connect(mapStateToProps, actions)(Cart);