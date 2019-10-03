import React, { Component } from 'react';
import { fetchUser } from '../actions/profileAction';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

class Profile extends Component {
	logout() {
		console.log(window.localStorage.token);
		window.localStorage.clear();
		const that = this;
		setTimeout(() => {
			that.props.history.push('/signin');
		}, 500);
	}

	// componentWillMount() {
	// 	console.log('hi');
	// 	const userId = window.localStorage.getItem('userId');
	// 	fetchUser(userId);
	// }

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
