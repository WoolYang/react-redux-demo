'use strict';
import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, HashRouter, Match, Link, hashHistory, IndexLink  } from 'react-router-dom'

import Header from './Header.js';
import Article from './Article.js';
import Info from './Info.js';
import Project from './Project.js';
import MainPage from './MainPage.js';
import NavigationMenu from '../components/NavigationMenu/NavigationMenu.js';

import 'normalize.css';    /* 重置浏览器默认样式 */

class App extends React.Component {

  render() {
      const container = {
        marginTop: "7%", marginLeft: "2%",
        marginRight: "2%", marginBottom: "3%",backgroundColor:"white",height:"100px"
      }

      return (
        <div>
          <Header></Header>
          <div>
              {this.props.children}
          </div>
        </div>
      )
  }
}

/*const mapStateToProps = state => ({
    menu: state.menu,
    header: state.header
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});

 export default connect(mapStateToProps, mapDispatchToProps)(App);*/
module.exports = App;