import React from 'react';
import { useState, useEffect } from 'react';
import "../components/display.css"
export default function Display() {

    const [list,setList]=useState([])

  useEffect(()=>{
    async function getData(){
    const data=await fetch("http://localhost:8080/users")
    .then((d)=>d.json())
    console.log(data)
    setList(data);
}
getData();
},[])

  return (
    <div className="main">
      <label>User Details</label>
    {list.map((ele)=>(
        <div key={ele.id} >
          <h5>{ele.username}</h5>
          <h3 >{ele.email}</h3>
          <h3>{ele.country}</h3>
          <h3>{ele.budget}</h3>
        </div> 
      ))}
      </div>
  )
}
