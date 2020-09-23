import { combineReducers } from 'redux';
import camReducer from './camReducer';
import authReducer from './authReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    cam : camReducer,
    auth : authReducer,
    firebase : firebaseReducer,
    firestore: firestoreReducer
});

export default rootReducer;