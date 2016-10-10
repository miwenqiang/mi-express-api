import React, { PropTypes } from 'react';
import {Router , Route , IndexRoute , browserHistory} from 'react-router';

import App from './components/ui/App.js';
import PostList from './components/ui/PostList.js';
import NewPost from './components/ui/NewPost.js';
import ShowPost from './components/ui/ShowPost.js';
import EditPost from './components/ui/EditPost.js';

class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path = '/' component = { App } >
          <IndexRoute component = { PostList } />
          <Route path='/write' component ={NewPost} />
          <Route path='/post/:id/edit' component ={EditPost} />
          <Route path='/post/:id' component ={ShowPost} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
