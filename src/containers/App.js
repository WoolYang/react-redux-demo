'use strict';
import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, HashRouter, Match, Link, hashHistory, IndexLink  } from 'react-router-dom'

import Header from './Header.js';
import Article from './Article.js';
import Info from './Info.js';
import Project from './Project.js';
import MainPage from './MainPage.js';

import {deepOrange500} from 'material-ui/styles/colors';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import 'normalize.css';    /* 重置浏览器默认样式 */

/*const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  }
});*/

class App extends React.Component {

  render() {
      return (
          <MuiThemeProvider muiTheme={getMuiTheme()}>
            <HashRouter history={hashHistory} >
              <div>
                  <Header></Header>
                  <Route exact path="/" component={MainPage}/>
                  <Route path="/blog/article" component={Article}/>
                  <Route path="/blog/info" component={Info}/>
                  <Route path="/blog/project" component={Project}/>
              </div>
            </HashRouter>
          </MuiThemeProvider>
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