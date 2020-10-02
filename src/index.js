import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import { createStore , applyMiddleware , compose } from 'redux';
import rootReducer from './reducer/rootReducer';
import { Provider , useSelector } from 'react-redux';
import thunk from 'redux-thunk';
import {  ReactReduxFirebaseProvider, getFirebase , isLoaded } from 'react-redux-firebase';
import {  reduxFirestore, getFirestore , createFirestoreInstance} from 'redux-firestore';
import firebase from './components/config/fbConfig';
//import firebase from "firebase/app";
import 'firebase/firestore';
import Laoder from './components/loader/loader';
import Loader from './components/loader/loader';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore(firebase)
  )
);

const rrfConfig = { 
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  //useFirestoreForProfile: true,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
  presence: 'presence', // where list of online users is stored in database
  sessions: 'sessions'
  
};

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <Loader />;
      return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
         <App />
      </AuthIsLoaded>
     
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);

// const store = createStore(rootReducer, 
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore })),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig , {useFirestoreForProfile: true , userProfile: 'users' , attachAuthIsReady : true })
//       )
//   );

//   store.firebaseAuthIsReady.then(() => {
//     ReactDOM.render(
//       <Provider store = {store}>
//           <App />
//       </Provider> ,
//       document.getElementById('root')
//     );
//     serviceWorker.unregister();
//   });



