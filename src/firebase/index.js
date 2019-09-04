import firebase from 'firebase';
import 'firebase/storage';

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: 'AIzaSyCHbGkQTCDjCBf3ZhfUWPsQ6WU-iUAya9o',
	authDomain: 'todo-app-897bc.firebaseapp.com',
	databaseURL: 'https://todo-app-897bc.firebaseio.com',
	projectId: 'todo-app-897bc',
	storageBucket: 'todo-app-897bc.appspot.com',
	messagingSenderId: '162015703612',
	appId: '1:162015703612:web:2007c110539a1208'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
