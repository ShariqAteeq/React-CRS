import { combineReducers } from 'redux';
import camReducer from './camReducer';
import authReducer from './authReducer';
import jobReducer from './jobReducer';
import { firebaseReducer } from 'react-redux-firebase';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    cam : camReducer,
    auth : authReducer,
    firebase : firebaseReducer,
    firestore: firestoreReducer,
    job: jobReducer
});

export default rootReducer;