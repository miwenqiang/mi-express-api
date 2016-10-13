import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import axios from 'axios';
import Form from './Form';
import Settings from '../../Settings.js'

class NewPost extends Component {
  getStyles() {
    return {
      content: {
        width: '100%',
        maxWidth: '750px',
        margin: '30px auto',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em',
        textAlign: 'center',
        paddingTop: '20px'
      }
    };
  }
  newPost(data){
    axios.post(`${Settings.host}/posts`, data)
    .then(res =>
       {browserHistory.push('/')}
    )
  }
  render() {
    const styles = this.getStyles();
    return (
      <div style={styles.content}>
        <div style={styles.title}>写文章</div>
        <Form label="发布文章" newPost={this.newPost.bind(this)}/>
      </div>
    );
  }
}

export default NewPost;
