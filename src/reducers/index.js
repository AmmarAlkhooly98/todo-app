import { combineReducers } from 'redux';

//import itemReducer from "./itemReducer";
import signupReducer from './signupReducer';
import signinReducer from './signinReducer';
import profileReducer from './profileReducer';

export default combineReducers({
	//add reducers here
	//Ex:   item: itemReducer
	userSignUp: signupReducer,
	userSignIn: signinReducer,
	userProfile: profileReducer
});
