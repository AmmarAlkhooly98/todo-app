import React, { Component } from 'react';
import { connect } from 'react-redux';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			username: '',
			password: ''
		};
	}

	onChange() {}

	render() {
		return (
			<div className="bg">
				<ul>
					<li>
						<a className="active" href="#home">
							Profile
						</a>
					</li>
					<li>
						<a href="#news">Todos</a>
					</li>
					<li>
						<a href="#contact">Other users</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
				</ul>
				<h1>SIGNUP</h1>
				<form>
					<label>Full Name</label>
					<br />
					<input
						placeholder="Full name"
						name="fullName"
						type="text"
						onChange={this.onChange.bind(this)}
					/>{' '}
					<br />
					<br />
					<label>username</label>
					<br />
					<input
						placeholder="username"
						name="username"
						type="text"
						onChange={this.onChange.bind(this)}
					/>{' '}
					<br />
					<br />
					<label>Password</label>
					<br />
					<input
						placeholder="Password"
						name="password"
						type="password"
						onChange={this.onChange.bind(this)}
					/>{' '}
					<br />
				</form>
			</div>
		);
	}
}

export default SignUp;
