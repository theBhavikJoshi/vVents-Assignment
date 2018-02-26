import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../actions/index';

class Checkout extends Component {

	checkoutThisCart(e, history) {
		e.preventDefault();
		let data = {
			customer: {
				name: document.querySelector('#name').value,	
				email: document.querySelector('#email').value
			}, 
			billing_address: {
				first_name: document.querySelector('#bFirstName').value,
		    last_name: document.querySelector('#bLastName').value,
		    line_1: document.querySelector('#bLine1').value,
		    line_2: document.querySelector('#bLine2').value,
		    county: document.querySelector('#bCounty').value,
		    postcode: document.querySelector('#bPostcode').value,
		    country: document.querySelector('#bCountry').value
			},
			shipping_address: {
				first_name: document.querySelector('#sFirstName').value,
		    last_name: document.querySelector('#sLastName').value,
		    line_1:  document.querySelector('#sLine1').value,
		    line_2: document.querySelector('#sLine2').value,
		    county: document.querySelector('#sCounty').value,
		    postcode: document.querySelector('#sPostcode').value,
		    country: document.querySelector('#sCountry').value,
			}
		};
		this.props.checkout(data, history);
		console.log(this.props.checkout);
	}
		
	renderContent() {
		return (
			<div className="row">
		    <form className="col s12">
		      <div className="row">
		        <div className="input-field col s6">
		          <input placeholder="Customer Name" id="name" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Customer Email" id="email" type="email" className="validate" />
		        </div>
		      </div>
		      <h6>Billing Address</h6>
    			<div className="row">
		        <div className="input-field col s6">
		          <input placeholder="First Name" id="bFirstName" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Last Name" id="bLastName" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Address Line 1" id="bLine1" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Address Line 2" id="bLine2" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="County" id="bCounty" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Postcode" id="bPostcode" type="number" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Country" id="bCountry" type="text" />
		        </div>
		      </div>
		      <h6>Shippping Address</h6>
    			<div className="row">
		        <div className="input-field col s6">
		          <input placeholder="First Name" id="sFirstName" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Last Name" id="sLastName" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Address Line 1" id="sLine1" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Address Line 2" id="sLine2" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="County" id="sCounty" type="text" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Postcode" id="sPostcode" type="number" />
		        </div>
		        <div className="input-field col s6">
		          <input placeholder="Country" id="sCountry" type="text" />
		        </div>
		      </div>
		      <div className="card-action right">
		      	<button onClick={(e) => this.checkoutThisCart(e, this.props.history)} className="waves-effect waves-light btn btn-large purple darken-3" style={{ margin: 5 }}><i className="material-icons left">done</i>Order</button>
		      </div>
		    </form>
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

export default connect(null, actions)(withRouter(Checkout));