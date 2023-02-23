import React, { useState,useEffect } from 'react'
import axios from 'axios'



export const Main = () => {

  const [data,setData] = useState([]);

  
  useEffect(()=>{
    axios.get("https://zy-yu9w.onrender.com/api/testing/").then(
      (res)=>{setData(res.data)
      console.log(res.data)}
    )
  },[])


  return (
    <> 
    Main Page
    <br>
    </br>
    First connected data 
    {data.map((ele)=>
    <div>{ele.name}</div>)}
    </>
  )
}
