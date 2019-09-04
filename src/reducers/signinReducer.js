import { SIGN_IN } from '../actions/types';

const initialState = {
	token: null,
	username: null,
	error: ''
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SIGN_IN:
			return {
				...state,
				token: action.payload,
				username: action.username,
				error: action.error
			};
		default:
			return state;
	}
}
