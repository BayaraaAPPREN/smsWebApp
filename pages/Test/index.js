import { useAppContext } from '../context';
import axios from 'axios';
import { useState } from 'react';


export default function Component() {
  const mycontext = useAppContext();
  const [data, setData] = useState('');
 

  // axios
  // .get("http://localhost:3000/posts/3")
  // .then((response) => {
  //   console.log(response)
  //   // setData(response.data)
  // })
  axios.get('http://localhost:8080/hello/' + mycontext[0]).then(response => {
    setData(response.data)
  });


  return (
    <div>
       <p> value is dd {mycontext} </p>
       <h1>{data.email}</h1>
    </div>
  )
}