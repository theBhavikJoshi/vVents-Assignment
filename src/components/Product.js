import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import ProductDetail from './ProductDetail';

class Product extends Component {

	componentWillMount() {
		const search = this.props.location.search;
		const params = new URLSearchParams(search);
		const idParam = params.get('id');
		this.props.fetchAProduct(idParam);
	}
	
	renderContent(data) {
		if(data.meta) {
			return <ProductDetail
				name={data.name} 
				description={data.description} 
				id={data.id} 
				commodity_type={data.commodity_type} 
				status={data.status}
				slug={data.slug}
				price={data.meta.display_price.with_tax.formatted}
				stockQuantity={data.meta.stock.level}
				stockStatus={data.meta.stock.availability}
			/>;
		}
	};

	render() {
		return (
	    <div>
	    	{this.renderContent(this.props.product)}
	    </div>
		);
	}
}
function mapStateToProps ({ product }) {
	return { product };
}

export default connect(mapStateToProps, actions)(Product);