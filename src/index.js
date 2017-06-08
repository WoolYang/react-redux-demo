
'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//import "babel-polyfill";
import App from './containers/App';
import Routes from './router';
import configureStore from './store/store';  //获取唯一的store

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import 'normalize.css';    /* 重置浏览器默认样式 */

const store = configureStore();


ReactDOM.render(
    <Provider store={store}>
    	<MuiThemeProvider muiTheme={getMuiTheme()}>
        	<Routes />
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('app')
);