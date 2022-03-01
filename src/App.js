import React, { Component } from 'react'
import axios from 'axios'
export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      title:'',
    }

  }
  //life cyc component first to run api 
  componentDidMount(){
    this.callApi()
  }
  //here we get api 
  callApi=()=>{
  axios.get('https://jsonplaceholder.typicode.com/posts/')
  .then((response)=>{
    this.setState({title:response.data[0].title})
  }).catch((error)=>{
    console.log(error);
  })
  }
  render() {
    return (
      <div>
        <h1>  {this.state.title} </h1>
      </div>
    )
  }
}
