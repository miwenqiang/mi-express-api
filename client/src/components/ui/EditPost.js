import React, { PropTypes } from 'react';
import axios from 'axios';


class Editpost extends React.Component {
  constructor(){
    super();
    this.state={
      post:{}
    }
  }
  componentDidMount(){
    let id=this.props.params.id;
    let address=`http://localhost:3000/post/${id}`
    console.log(id)
    // axios.get(address)
    //   .then(res =>
    //   this.setState({
    //     post:res.data.post
    //   })
    // )
  }
  render () {
    return(
      <div>sdsd</div>
    )
  }
}

export default Editpost;
