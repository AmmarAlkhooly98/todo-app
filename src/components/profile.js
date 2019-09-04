import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

class Profile extends Component {
	logout() {
		window.localStorage.clear();
		const that = this;
		setTimeout(() => {
			that.props.history.push('/signin');
		}, 500);
	}

	render() {
		return (
			<div className="bg">
				<h2>Hii</h2>
				<NavLink to="/signup" activeStyle={{ color: 'white' }}>
					<h3 id="signup">Learn More</h3>
				</NavLink>
				<button onClick={this.logout.bind(this)}>Logout</button>
			</div>
		);
	}
}

export default Profile;
