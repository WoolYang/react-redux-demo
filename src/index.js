'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {
	Provider
} from 'react-redux';

import Routes from './router';
import configureStore from './store/store'; //获取唯一的store

import 'normalize.css'; // 重置浏览器默认样式
import 'antd/dist/antd.css';
import './assets/styles/common.less'; // 公共样式

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
        	<Routes />
    </Provider>,
	document.getElementById('app')
);