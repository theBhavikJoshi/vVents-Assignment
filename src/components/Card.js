import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ name, description, price, id, slug }) => {
	const url = slug + '.jpg';
	return (
    
		<div className="col s12 m7">
	    <h3 className="header">{name}</h3>
	    <div className="card horizontal">
	      <div className="card-image">
	        <img src={url} alt='drone'/>
	      </div>
	      <div className="card-stacked">
	        <div className="card-content">
	          <p>{description}</p>
	        </div>
	        <h5 className='right-align' style={{paddingRight: 20}}>{price}</h5>
	        <div className="card-action center-align">
	          <Link to={{ pathname: '/product', search: `?id=${id}`}} className="waves-effect waves-light btn ">View</Link>
	        </div>
	      </div>
	    </div>
	  </div>

	);
}
export default Card;