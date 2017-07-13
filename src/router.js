import React from 'react';
import {
	BrowserRouter,
	Route,
	Router,
	HashRouter,
	Match,
	Link,
	hashHistory,
	IndexLink,
	Switch
} from 'react-router-dom'
import App from './containers/App';
import Article from './containers/Article.js';
import Info from './containers/Info.js';
import MainPage from './containers/MainPage.js';
import ArticleDetail from './components//ArticleDetail.js';

class Routes extends React.Component {

	render() {
		return (
			<HashRouter history={hashHistory} >
              <Route render={({ location }) => {
              	 return(
		              <div>
		              	  <App>
			              	  <Route exact path="/" component={MainPage} />
			                  <Route path="/article" component={Article}/>
			                  <Route path="/detail/:id" component={ArticleDetail}/>
			                  <Route path="/info" component={Info}/>
		                  </App>
		              </div>
	             )
	          }}/>
            </HashRouter>

		)
	}
}
export default Routes;