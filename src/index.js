import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
//thunk sets up the async for redux
import thunk from 'redux-thunk'
///access firestore/firebase api
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import fbConfig from './config/fbConfig'

                                                            
const store = createStore(rootReducer, 
    //compose alows more store enchancers
    compose(
        //gives extra argument to the projectactions
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig),//allows getFirestore
        reactReduxFirebase(fbConfig, { useFirestoreForProfile:true, userProfile:'users', attachAuthIsReady: true })//allows getFirebase
    )
);

store.firebaseAuthIsReady.then(()=>{
    ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
    serviceWorker.unregister();
    
})

// registerServiceWorker();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA