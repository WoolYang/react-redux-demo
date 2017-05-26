'use strict';
import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions/action';

import Header from '../components/header/header.js';
import Menu from '../components/menu/menu.js';

import 'normalize.css';
import '../styles/bootstrap/css/bootstrap.min.css';

class App extends React.Component {

  render() {

      const { header,menu, actions } = this.props;

      return (
        <div>
            <Header actions={actions} header={header} ></Header>
            <div>
              <Menu actions={actions} menu={menu} ></Menu>
            </div>
        </div>
      )
  }
}

const mapStateToProps = state => ({
    menu: state.menu,
    header: state.header
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(App);
//module.exports = App;
