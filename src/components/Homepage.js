import React from 'react';

const Homepage = () => {
	return (
		<div style={styles.divStyles} className='valign-wrapper center'>
			<h1 style={styles.h1Styles} >Welcome to Drone Store!</h1>
		</div>
	)
}

const styles = {
	divStyles : {
		height: 'calc(100vh - 70px)',
		backgroundColor: '#EAEAEA',
		color: '#252A34'
	},
	h1Styles: {
		margin: '0 auto'
	}
}

export default Homepage;