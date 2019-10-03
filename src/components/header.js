import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<div className="bg">
				{/* <body>
					style = {{ background: `url("./imgs/beautiful-color-ui-gradients-backgrounds-endless-river.png")` }}
				</body> */}
				<ul>
					<li>
						<NavLink to="/userProfile">Profile</NavLink>
					</li>
					<li>
						<NavLink to="/">Todos</NavLink>
					</li>
					<li>
						<NavLink to="/">Other users</NavLink>
					</li>
					<li>
						<NavLink to="/">About</NavLink>
					</li>
					<li>
						<NavLink to="/signup">Sign Up</NavLink>
					</li>
					<li>
						{window.localStorage.length > 0 ? (
							<NavLink to="/userProfile">profile</NavLink>
						) : (
							<NavLink to="/signin">Sign In</NavLink>
						)}
						{/* <NavLink to="/signin">Sign In</NavLink> */}
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;
