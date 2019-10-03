import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import SignUp from './components/signup.js';
import SignIn from './components/signin';
import Header from './components/header';
import Profile from './components/profile';
import ProtectedRoute from './components/protect';

class App extends React.Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Provider store={store}>
					<Router>
						<Header />
						<ProtectedRoute
							token={this.props.token}
							username={this.props.username}
							path="/userProfile"
							exact
							component={Profile}
						/>
						<Route path="/signup" exact component={SignUp} />
						<Route path="/signin" exact component={SignIn} />
					</Router>
				</Provider>
			</div>
		);
	}
}

export default App;
