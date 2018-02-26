import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
	return (
		<div style={styles.divStyles}>
			<h1 className='center' >Success!</h1>
			<h3 className='center'>Your Order is Complete!</h3>
			<h4 className='center'>Information about your last Transaction has been stored in the database.</h4>
			<div className="card-action center-align">
        <Link to='/' className="waves-effect waves-light btn ">Go To Home!</Link>
      </div>
		</div>
	)
}

const styles = {
	divStyles : {
		height: '90vh',
		marginTop: 0,
		backgroundColor: '#EAEAEA',
		color: '#252A34'
	}
}

export default Success;