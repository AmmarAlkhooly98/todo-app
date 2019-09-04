import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, token, username, ...rest }) => {
	return (
		<Route
			{...rest}
			render={(props) => {
				let windowToken = window.localStorage.getItem('token');
				let windowUsername = window.localStorage.getItem('username');

				if (token || windowToken) {
					return <Component {...props} username={username || windowUsername} />;
				} else {
					return (
						<Redirect
							to={{
								pathname: '/signin',
								state: {
									from: props.location
								}
							}}
						/>
					);
				}
			}}
		/>
	);
};

export default ProtectedRoute;
