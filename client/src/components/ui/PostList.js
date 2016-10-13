import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';
import filter from 'lodash/fp/filter';

import DeletePost from './DeletePost.js';
import Settings from '../../Settings.js';


class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: [],
      id: ''
    };
  }
  getStyles() {
    return {
      content: {
        position: 'relative',
        width: '100%',
        height:'100px',
        maxWidth: '600px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      title: {
        fontSize: '1.2em'
      },
      button: {
       display: 'block',
       width: '80px',
       height: '36px',
       lineHeight: '36px',
       textAlign: 'center',
       backgroundColor: 'teal',
       fontSize: '1em',
       color: '#fff',
       textDecoration: 'none',
       borderRadius: '20px',
       position:'absolute',
       left:'10px',
       bottom:'5px'
       },
       button1: {
        display: 'block',
        width: '80px',
        height: '36px',
        lineHeight: '36px',
        textAlign: 'center',
        backgroundColor: '#FF5722',
        fontSize: '1em',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '20px',
        position:'absolute',
        left:'100px',
        bottom:'5px'
        },
        button2: {
         display: 'block',
         width: '80px',
         height: '36px',
         lineHeight: '36px',
         textAlign: 'center',
         backgroundColor: 'red',
         fontSize: '1em',
         color: '#fff',
         textDecoration: 'none',
         borderRadius: '20px',
         position:'absolute',
         right:'20px',
         bottom:'5px'
         },
       div:{
         display:'flex'
       },
       a: {
        margin:'10px auto',
        display: 'block',
        width: '120px',
        height: '36px',
        lineHeight: '36px',
        textAlign: 'center',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        textDecoration: 'none',
        borderRadius:'5px'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get(`${Settings.host}/posts`).then(res => {
      this.setState({
        posts: res.data.posts
      });
    });
  }
  filterPosts(id) {
    const posts = filter((post) => {
      return post._id !== id
    }, this.state.posts);

    this.setState({ posts: posts })
  }

  handleClick(value) {
    this.setState({id: value});
    this.refs.dialog.handleOpen();
  }

  render() {
    const styles = this.getStyles();
    const postList = map((post) => {
      return (

          <div style={styles.content} key={post._id}>
            <div style={styles.title}>{post.title}</div>
            <Link to={`/post/${post._id}`} style={styles.button}>查看内容</Link>
            <Link to={`/post/${post._id}/edit`} style={styles.button1}>修改内容</Link>
            <Link to={``} style={styles.button2} onClick={this.handleClick.bind(this,post._id)} >删除内容</Link>
          </div>
      )
    }, this.state.posts);
    return(
      <div>
        <div style={styles.div}>
          <Link to='/write' style={styles.a}>写文章</Link>
        </div>
        { postList }
        <DeletePost id={this.state.id} removePosts={this.filterPosts.bind(this)} ref='dialog' />
      </div>
    );
  }
}
export default PostList;
