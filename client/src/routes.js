import React, { PropTypes } from 'react';
import {Router , Route , IndexRoute , browserHistory} from 'react-router';

import App from './components/ui/App.js';
import PostList from './components/ui/PostList.js'
import TagList from './components/ui/TagList.js'
import NewPost from './components/ui/NewPost.js'

class Routes extends React.Component {
  render () {
    return(
      <Router history={browserHistory}>
        <Route path = '/' component = { App } >
          <IndexRoute component = { PostList } />
          <Route path='/write' component ={NewPost} />
          <Route path='/tag' component ={TagList} />
        </Route>
      </Router>
    )
  }
}

export default Routes;
