import React,{Component} from 'react';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Link} from 'react-router';

class App extends Component {
  getStyles() {
    return {
      header: {
        height: '64px',
        width: '100%',
        backgroundColor: '#00bcd4',
        textAlign: 'center',
        lineHeight: '64px',
      },
      link: {
        fontSize: '1.5em',
        color: '#fff',
        textDecoration: 'none'
      },
      button: {
       display: 'block',
       margin: '30px auto',
       width: '120px',
       height: '36px',
       lineHeight: '36px',
       textAlign: 'center',
       backgroundColor: '#ff4081',
       fontSize: '1em',
       color: '#fff',
       textDecoration: 'none',
       borderRadius: '20px'
     },
     div:{
       display:'flex'
     }
    };
  }

  render() {
    let styles = this.getStyles();
    return (
      <div>
        <header style={styles.header}>
          <div style={styles.link}>BORN TO CODE</div>
        </header>
        <div style={styles.div}>
          <Link to='/write' style={styles.button}>写文章</Link>
          <Link to='/tag' style={styles.button}>分类</Link>
        </div>
        { this.props.children }
      </div>
    );
  }
}

export default App;
