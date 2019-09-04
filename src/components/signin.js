import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userSignIn } from '../actions/signinAction';
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect, withRouter } from 'react-router-dom';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: ''
		};
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onClick(e) {
		const signIn_Info = {
			username: this.state.username,
			password: this.state.password
		};
		e.preventDefault();

		this.props.userSignIn(signIn_Info);
	}

	componentWillReceiveProps(props) {
		console.log(props);
		if (props.token) {
			this.props.history.push('/userProfile');
		}
	}

	render() {
		return (
			<div className="bg">
				<h1>SIGN IN</h1>
				<br />
				<br />
				<label>username</label>
				<br />
				<input placeholder="username" name="username" type="text" onChange={this.onChange.bind(this)} /> <br />
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
				<br />
				<button onClick={this.onClick.bind(this)}>Sign In</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	username: state.userSignIn.username,
	error: state.userSignIn.error,
	token: state.userSignIn.token,
	visible: state.userSignIn.visible
});

export default connect(mapStateToProps, { userSignIn })(SignIn);
