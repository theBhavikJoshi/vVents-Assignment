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
	        <div className="card blue-grey darken-1">
	          <div className="card-content white-text">
	            <span className="card-title">{name}</span>
	            <p>{product_id}</p>
	            <p>{quantity}</p>
	            <p>{unit_price}</p>
	            <p>{value}</p>
	          </div>
	          <div className="card-action center-align">
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