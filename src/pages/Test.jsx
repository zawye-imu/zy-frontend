import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { useMainState } from '../states/mainState';
import { useHookstate } from '@hookstate/core';
import { globalState } from '../states/GlobalState';
import Second from './Second';



export const Test = () => {

  const [data,setData] = useState([]);
  const mainState = useMainState();
  const state = useHookstate(globalState);
  const name = state.name.get();

  console.log("logging",state.name.get())

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
    <input
      style={{ transform: 'scale(1.6)', marginLeft: 20 }}
      type="checkbox"
      checked={mainState.isEditable}
      onChange={() => mainState.toogleIsEditable()}
                />
    Testing State
    {data.map((ele)=>
    <div>{ele.name}</div>)}

    <div>
      Name {name}
      <p onClick={()=>state.name.set("mo mo")}>Click me</p>
    </div>
    <br />
    <br />
    <Second></Second>
    </>
  )
}
