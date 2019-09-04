import axios from 'axios';
import { SIGN_IN } from './types';
import { username } from '../components/config';

export const userSignIn = (signIn_Info) => (dispatch) => {
	axios
		.post('/signin', signIn_Info)
		.then((response) => {
			console.log(response);
			window.localStorage.setItem('token', response.data.token);
			window.localStorage.setItem('username', response.data.user.username);
			dispatch({
				type: SIGN_IN,
				payload: response.data.token,
				username: response.data.user
			});
		})
		.catch((error) => {
			dispatch({
				type: SIGN_IN,
				error: 'Incorrect username or password.',
				payload: null
			});
		});
};
