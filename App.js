import axios from 'axios';
import React,{useState,useEffect} from 'react'

export default function App() {
  //there is state use hooks
  const [title,settitle] = useState('');
  useEffect(()=>{
    callApi();
  },[])

  const callApi=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>{
      settitle(response.data[0].title)

    }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <div>
 <h1>  {title} </h1>

    </div>
  )
}

