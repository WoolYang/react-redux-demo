import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';

import { cyan300 } from 'material-ui/styles/colors';

import  '../assets/styles/MainPage.less';
class MainPage extends React.Component {

    render() {

        return (
            <div className="mainpage" style={{backgroundColor:cyan300,height:"500px"}}>
                <div className="box"></div>
            </div>
        )
    }
}

module.exports = MainPage;
