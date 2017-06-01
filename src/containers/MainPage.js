import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';


class MainPage extends React.Component {

    render() {

        return (
            <div style={{textAlign:'center'}}>
                <span>主页</span>
            </div>
        )
    }
}

module.exports = MainPage;
