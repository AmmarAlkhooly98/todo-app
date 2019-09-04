import axios from 'axios';
import { NEW_USER } from './types';
import { error } from 'util';

export const createUser = (user) => (dispatch) => {
	axios
		.post('/signup', user)
		.then((response) => {
			dispatch({
				type: NEW_USER,
				payload: 'successfully sign up',
				done: true
			});
			console.log(response);
		})
		.catch((err) => {
			if (err === 'Request failed') {
				console.log('username taken');
			}
			console.log(err);
		});
};
