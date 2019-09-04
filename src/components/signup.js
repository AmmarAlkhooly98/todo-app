import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storage } from '../firebase';
import { createUser } from '../actions/signupAction';
import PropTypes from 'prop-types';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fullName: '',
			username: '',
			password: '',
			image: null,
			url: '',
			error: ''
		};
	}
	onChange(e) {
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	handleChange(e) {
		if (e.target.files[0]) {
			const image = e.target.files[0];
			this.setState(() => ({ image }));
			console.log(image);
		}
	}

	handleUpload() {
		const { image } = this.state;
		const uploadTask = storage.ref(`images/${image.name}`).put(image);
		uploadTask.on(
			`state_changed`,
			(snapshot) => {
				const progress = Math.round(snapshot.bytesTransferred / snapshot.totalBytes * 100);
			},
			(error) => {},
			() => {
				storage.ref(`images`).child(image.name).getDownloadURL().then((url) => {
					console.log(url);
					this.setState({ url });
				});
			}
		);
	}

	onClick(e) {
		const user = {
			fullname: this.state.fullName,
			username: this.state.username.toLocaleLowerCase(),
			password: this.state.password,
			url: this.state.url
		};
		e.preventDefault();

		if (user.username.length < 1 || user.fullname.length < 1 || user.password.length < 1) {
			this.setState({ error: 'invalid information.' });
			console.log('invalid information.');
		} else {
			this.props.createUser(user);
		}
	}

	componentWillReceiveProps(props) {
		console.log(props);
		if (props.done) {
			this.props.history.push('/signin');
		}
	}

	render() {
		return (
			<div className="bg">
				<h1>SIGNUP</h1>
				<br />
				<br />
				<img
					src={
						this.state.url ||
						'https://i0.wp.com/addisonavenuemarketing.com/wp-content/uploads/2016/07/facebook-avatar.jpg?fit=690%2C435'
					}
					alt="uploaded image"
					height="150"
					width="auto"
				/>
				<br />
				<input name="image" type="file" onChange={this.handleChange.bind(this)} />
				<button onClick={this.handleUpload.bind(this)}>Upload</button>
				<br />
				<br />
				<label>Full Name</label>
				<br />
				<input placeholder="Full name" name="fullName" type="text" onChange={this.onChange.bind(this)} /> <br />
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
				<button onClick={this.onClick.bind(this)}>SignUp</button>
			</div>
		);
	}
}

SignUp.propTypes = {
	createUser: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	msg: state.userSignUp.Msg,
	done: state.userSignUp.done
});

export default connect(mapStateToProps, { createUser })(SignUp);
