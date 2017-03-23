import React, {Component} from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './Index'
import List from '../component/list'
import Edit from '../component/edit'
export default class RouteContainer extends Component{
    render(){
        return(
            <Router history={browserHistory} >
				<Route path="/" component={App}>
	              <IndexRoute component={List}/>
                  <Route path='/edit'  component={Edit}/>
	             </Route>
			</Router>
        )
    }
}
