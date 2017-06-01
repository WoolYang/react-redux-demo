
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import "babel-polyfill";
import App from './containers/App';
import configureStore from './store/store';  //获取唯一的store

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);


/*<Router history = {history}>
 <Route path="/" component={App}> 
 <IndexRedirect to="sign-in" /> 
 <Route path="sign-in" component={ Components.SignIn } /> 
 <Route path="index" component={ Components.Index } /> 
 </Route> 
 </Router>*/