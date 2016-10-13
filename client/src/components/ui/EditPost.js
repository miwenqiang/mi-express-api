import React, { PropTypes } from 'react';
import axios from 'axios';
import { browserHistory } from 'react-router';


import EditForm from './EditForm.js';
import Settings from '../../Settings.js'


class Editpost extends React.Component {
  constructor(){
    super();
    this.state={
      post:{},
      wait:true
    }
  }
  componentDidMount(){
    let id=this.props.params.id;
    let address=`${Settings.host}/post/${id}`
    axios.get(address)
      .then(res =>
        this.setState({
          post:res.data.post,
          wait:false
        })
      )
  }
  publishPost(data){
    let id=this.props.params.id;
    axios.put(`${Settings.host}/posts/${id}`,data)
      .then(res =>
        {browserHistory.push('/')}
    )
  }
  render () {
    return(
      <div>
        {this.state.wait?  "loading" : <EditForm post={this.state.post} publishPost={this.publishPost.bind(this)}/>}
      </div>
    )
  }
}

export default Editpost;
