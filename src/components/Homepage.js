import React from 'react';

const Homepage = () => {
	return (
		<div style={styles.divStyles}>
			<h2>Welcome to Drone Store!</h2>
		</div>
	)
}

const styles = {
	divStyles : {
		height: '90vh',
		backgroundColor: '#EAEAEA',
		color: '#252A34',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}

export default Homepage;