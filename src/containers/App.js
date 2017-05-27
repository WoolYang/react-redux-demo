'use strict';
import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter, Route, HashRouter, Match, Link, hashHistory, IndexLink  } from 'react-router-dom'

/*import { bindActionCreators } from 'redux';
import actions from '../actions/action';*/

import Header from './Header.js';
import Article from './/Article.js';
import Info from './/Info.js';

import 'normalize.css';
import '../styles/bootstrap/css/bootstrap.min.css';

class App extends React.Component {

  render() {

      const { header,menu, actions } = this.props;

      return (
        <div className="wraper">
        <BrowserRouter history={hashHistory} >
          <div>
              <Header></Header>
              <Route exact path="/" component={Article}/>
              <Route path="/article" component={Article}/>
              <Route path="/info" component={Info}/>
          </div>
       </BrowserRouter>
       {/*    <Header actions={actions} header={header} ></Header>
            <div>
              <Article actions={actions} menu={menu} ></Article>
            </div>
            <div>
              <Info actions={actions} menu={menu} ></Info>
            </div> */}
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