import React from 'react';

import {
	connect
} from 'react-redux';
import {
	bindActionCreators
} from 'redux';
import actions from '../actions/action';

import '../assets/styles/mainPage.less';

class MainPage extends React.Component {

	render() {

		return (
			<div className="mainpage" style={{backgroundColor:'#3db8c1',height:"500px"}}>
                <div className="box"></div>
            </div>
		)
	}
}

module.exports = MainPage;