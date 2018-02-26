import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/index';

class Payment extends Component {

	makePayment(history) {
		let data = {
		  gateway: 'stripe',
		  method: 'purchase',
		  first_name: 'John',
		  last_name: 'Doe',
		  number: '4242424242424242',
		  month: '08',
		  year: '2020',
		  verification_value: '123'
		};
		const search = this.props.location.search;
		const params = new URLSearchParams(search);
		const idParam = params.get('id');

		this.props.payment(idParam, data, history);

	}
		
	renderContent() {
		return (
			<div className="center-align">
				<h2>Let us Manage your Payment</h2>
				<h4>Just click the following Button and we will Pay for you!</h4>
				<h5>We are Generous, aren't we!</h5>
				<div className="card-action center-align">
	      	<button onClick={() => this.makePayment(this.props.history)} className="waves-effect waves-light btn btn-large purple darken-3" style={{ margin: 5 }}><i className="material-icons left">done</i>Make Payment</button>
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

export default connect(null, actions)(withRouter(Payment));