import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from './Card';

class Products extends Component {

	renderContent(data) {
		let html ='';
		if(data) {
			html = data.map((product) => {
				return <Card key={product.name} name={product.name} slug={product.slug} description={product.description} price={product.meta.display_price.with_tax.formatted} id={product.id} slug={product.slug} />;
			});
		}
		return html;
	};

	render(props) {
		return (
			<div>
				<h2 style={{textAlign: 'center'}}>Products</h2>
				<div>
					{this.renderContent(this.props.products)}
				</div>
			</div>
		)
	}
}

function mapStateToProps ({ products }) {
	return { products };
}

export default connect(mapStateToProps)(Products);