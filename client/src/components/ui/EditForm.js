import React, { PropTypes } from 'react';
import axios from 'axios';
import {Link} from 'react-router';
import Radium from 'radium';


import Settings from '../../Settings.js';

class EditForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      post:this.props.post
    }
  }
  handleSubmit(e){
    e.preventDefault();
    const title = this.refs.title.value;
    const content = this.refs.content.value;
    const classify = this.refs.classify.value;
    this.props.publishPost({title,content,classify})
  }
  getStyles() {
    return {
      content: {
        width: '100%',
        height:'100%',
        maxWidth: '750px',
        margin: '20px auto',
        backgroundColor: '#fff',
        borderRadius: '5px',
        padding: '16px',
        boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'
      },
      form: {
        padding: '20px 40px',
      },
      div: {
        marginBottom: '10px'
      },
      label: {
        display: 'block',
        fontSize: '.9em',
        color: 'rgba(0,0,0,.6)',
        paddingBottom: '10px'
      },
      input: {
        width: '100%',
        height: '48px',
        border: '1px solid #ddd',
        borderRadius: '5px',
        fontSize: '1em',
        padding: '10px',
        boxSizing: 'border-box',
        ':focus': {
          border: '1px solid #00bcd4',
          outline: 'none'
        }
      },
      actions: {
        textAlign: 'center'
      },
      button: {
        width: '120px',
        height: '36px',
        border: 'none',
        backgroundColor: '#ff4081',
        fontSize: '1em',
        color: '#fff',
        display: 'inline-block',
        margin: '20px auto 0',
        borderRadius: '20px',
        ':hover': {
          cursor: 'pointer'
        },
        ':focus': {
          outline: 'none'
        }
      },
      link: {
        display: 'inline-block',
        marginLeft: '15px',
        fontSize: '1em',
        color: '#00bcd4',
        opacity: '.8',
        textDecoration: 'none'
      }
    };
  }
  render () {
    const styles = this.getStyles()
    return(
      <div style={styles.content}>
        <form style={styles.form} onSubmit={this.handleSubmit.bind(this)}>
          <div style={styles.div}>
            <label style={styles.label}>title</label>
            <input style={styles.input} ref="title" defaultValue={this.state.post.title} />
          </div>
          <div style={styles.div}>
            <label style={styles.label}>classify</label>
            <input style={styles.input} ref="classify" defaultValue={this.state.post.classify} />
          </div>
          <div style={styles.div}>
            <label style={styles.label}>content</label>
            <textarea style={[styles.input, {height: '100%'}]}  rows='20' ref='content' defaultValue={this.state.post.content} />
          </div>
          <div style={styles.actions}>
            <button type='submit' style={styles.button}>更新文章</button>
            <Link to='/' style={styles.link}>取消</Link>
          </div>
        </form>
      </div>
    )
  }
}
EditForm.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Radium(EditForm);
