import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class CartCard extends Component {
	increaseProductQuantity(id, quantity) {
		this.props.plusCart(id, quantity);
	}

	decreaseProductQuantity(id, quantity) {
		this.props.minusCart(id, quantity);
	}
	
	renderContent() {
		const { name, product_id, quantity, unit_price,	id,	value } = this.props;
		return (
			<div className="row">
	      <div className="col s12 m8 offset-m2">
	        <div className="card #26a69a teal lighten-1">
	          <div className="card-content white-text">
	            <span className="card-title center">Item: {name}</span>
	            <p className='right' style={{ fontSize : 12 }} >Product ID : {product_id}</p>
	            <br/>
	            <p className='right' style={{ fontSize : 18 }} >Quantity: {quantity}</p>
	            <p style={{ fontSize : 18 }}>Unit Price: {unit_price}</p>
	            <p style={{ fontSize : 18 }}>Total Value: {value}</p>
	          </div>
	          <div className="card-action right-align">
			        <button onClick={() => this.increaseProductQuantity(id, quantity)} className="waves-effect waves-light btn purple darken-3" style={{ margin: 5 }}><i className="material-icons">add</i></button>
			        <button onClick={() => this.decreaseProductQuantity(id, quantity)} className="waves-effect waves-light btn purple darken-3" style={{ margin: 5 }}><i className="material-icons">remove</i></button>
			      </div>
	        </div>
	      </div>
	    </div>
		)
	}

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
	
}

function mapStateToProps ({ cart }) {
	return { cart };
}

export default connect(mapStateToProps, actions)(CartCard);