class Auth {
	constructor() {
		this.token = window.localStorage.getItem('token');
		this.username = window.localStorage.getItem('username');
	}

	login(cb) {
		this.authenticated = true;
		cb();
	}

	logout(cb) {
		this.authenticated = false;
		cb();
	}

	getToken() {
		return this.token;
	}

	getUsername() {
		return this.username;
	}
}

export default new Auth();
