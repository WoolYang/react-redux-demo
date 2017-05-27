import React from 'react';
import { BrowserRouter, Route, Router, HashRouter, Match, Link, hashHistory, IndexLink  } from 'react-router-dom'
import App from './containers/App';

class routes extends React.Component {
	render() {
		return (
			<Router history={hashHistory}>
				<Route path='/' component={App}>
					<IndexRoute component={Header}/>
					<Route path='/arcitle' component={Article}></Route>
					<Route path='/info' component={Info}></Route>
				</Route>	
			</Router>

		)
	}
}
export default routes;