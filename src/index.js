
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { BrowserRouter, Route, Router, HashRouter, Match, Link, hashHistory, IndexLink  } from 'react-router-dom'
import App from './containers/App';
import configureStore from './store/store';  //获取唯一的store


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