import axios from 'axios';
import React,{useState,useEffect} from 'react'
import Title from './Title'
export default function App() {
  //there is state use hooks for func
  const [titles,updateTitles] = useState([]);
  //use life cyc
  useEffect(()=>{
    callApi();
  },[])

  const callApi=()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/')
    .then((response)=>{
        response.data.map(element => {
          updateTitles(titles =>[...titles, element.title]);
         
        });

    }).catch((error)=>{
      console.log(error);
    })
  }


  return (
    <ul>
            {titles.map((title, id) => (
                <li key={id}>{title}</li>
            ))}
        </ul>
  )
}

