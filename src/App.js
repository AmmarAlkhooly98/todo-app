import React from 'react';
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import SignUp from './components/signup.js';

function App() {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<SignUp />
				</Router>
			</Provider>
		</div>
	);
}

export default App;
