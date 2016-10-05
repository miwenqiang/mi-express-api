import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';


class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  getStyles() {
    return {
      content: {
        display:'flex',
        position: 'relative',
        width: '100%',
        height: '60px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        flexGrow:'1',
        fontSize: '1.2em'
      },
      button: {
        width: '80px',
        height: '36px',
        border: 'none',
        backgroundColor: 'red',
        fontSize: '0.5em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '2px',
        ':hover': {
          cursor: 'pointer'
        }
      },
      div:{
        display:'flex'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        posts: res.data.posts
      });
    });
  }
  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (

          <div style={styles.content} key={post._id}>
            <div style={styles.title}>{post.title}/{post.classify}<br/>{post.createdAt}</div>
            <button style={styles.button}>DELETE</button>
          </div>
      )
    }, this.state.posts);
    return(
      <div>
        { postList }
      </div>
    );
  }
}
export default PostList;
