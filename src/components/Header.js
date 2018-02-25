import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {

	return (
		<nav>
	    <div className="nav-wrapper  blue darken-4">
	      <Link to='/' className="brand-logo">Drone Store</Link>
	      <ul id="nav-mobile" className="right hide-on-med-and-down">
	        <li><Link to='/products'>Products</Link></li>
	        <li><Link to='/cart'>Cart</Link></li>
	      </ul>
	    </div>
	  </nav>
	)

}

export default Header;