import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

class ProductDetail extends Component{

	addProductToCart(id) {
		this.props.addToCart(id);
	}

	renderContent() {
		
		const { name, slug, description, price,	id,	commodity_type,	stockQuantity, stockStatus,	status } = this.props;
		const url = slug + '.jpg';
		return (
			<div className="row">
				<div className="col m12" style={{height: 500}}>
			    <img src={url} alt="Drone" width='100%' height='80%'/>
			  </div>				
				<div className="m5">
					<p style={{fontSize: 20}}>
						<i>Name :</i> 
						<span style={{fontWeight: 'bold'}}> {name}</span>
					</p>
					<p style={{fontSize: 20}}>
						<i>Description :</i> 
						<span style={{fontWeight: 'bold'}}> {description}</span>
					</p>
					<p style={{fontSize: 20}}>
						<i>Commodity Type :</i> 
						<span style={{fontWeight: 'bold'}}> {commodity_type}</span>
					</p>
					<p style={{fontSize: 20}}>
						<i>Availability :</i>
						<span style={{fontWeight: 'bold'}}> {stockStatus}</span>
					</p>
					<p style={{fontSize: 20}}>
						<i>Stock Quantity :</i> 
						<span style={{fontWeight: 'bold'}}> {stockQuantity}</span>
					</p>
					<p style={{fontSize: 20}}>
						<i>Status :</i>
						<span style={{fontWeight: 'bold'}}> {status}</span>
					</p>
				</div>
				<div className="m5">
					<p style={{fontSize: 40}} className='center-align'>Price: <span style={{fontWeight: 'bold'}}>{price}</span></p>
				</div>
				<div className="card-action center-align">
	        <button onClick={() => this.addProductToCart(id)} className="waves-effect waves-light btn purple darken-3" style={{ margin: 20 }}>Buy</button>
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
export default connect(null, actions)(ProductDetail);