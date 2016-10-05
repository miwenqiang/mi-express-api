import React, { Component } from 'react';
import map from 'lodash/fp/map';
import axios from 'axios';
import {Link} from 'react-router';


class TagList extends Component {
  constructor() {
    super();
    this.state={
      tags: []
    };
  }
  getStyles() {
    return {
      content: {
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
        fontSize: '1.2em'
      }
    }
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      this.setState({
        tags: res.data.posts
      });
      console.log(this.state.posts);
    });
  }
  render() {
    const styles = this.getStyles();
    const tagList = map((post) => {
      return (
        <div style={styles.content} key={post._id}>
          <div style={styles.title}>{post.classify}</div>
        </div>
      )
    }, this.state.tags);
    return(
      <div>
        { tagList }
      </div>
    );
  }
}
export default TagList;
