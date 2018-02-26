import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';

import Header from './Header';
import Homepage from './Homepage';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';
import Checkout from './Checkout';
// import Payment from './Payment';

const Payment = () => <h2>Payment</h2>;

class App extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/products' component={Products} />
            <Route exact path='/cart' component={Cart} />
            <Route exact path='/product' component={Product} />
            <Route exact path='/checkout' component={Checkout} />
            <Route exact path='/payment' component={Payment} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default connect(null, actions)(App);