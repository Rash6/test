import React from 'react';
import { useState } from 'react';
import Display from './Display';
//import { input } from "bootstrap";

export default function Form() {

    const [formdata,setFormdata]=useState({
        // username:"",
        // email:"",
    })




    const handlechange=(e)=>{
        //console.log(e.target.value)
        //const {id,value}=e.target;
        setFormdata({
            ...formdata,
           // [id]:value,
           [e.target.id]:e.target.value
        });
    };

//to submit the form

const handlesubmit=(e)=>{
e.preventDefault();
console.log(formdata)
fetch("http://localhost:8080/users",{
    method:"POST",
    headers: { 'Content-Type': 'application/json' },
    body:JSON.stringify(formdata)
})
}


  return (
    <form onSubmit={handlesubmit}>
  <label>Name:</label>
  <br></br>
  <input onChange={handlechange}  type="text" placeholder='Enter your name' id="username" />
 
<br>
</br>
  <label>Email address:</label>
  <br></br>
  <input onChange={handlechange}  type="text" placeholder='Enter your email' id="email" />
<br></br>

  <label>Where do you want to go</label>
  <br>
  </br>
  <select onChange={handlechange} id="country">
    <option></option>
    <option value="india" >India</option>
    <option value="arfica" >Africa</option>
    <option value="europe" >Europe</option>
  </select>

  <br></br>
  <label>No of travellers</label>
  <input onChange={handlechange}  type="number" placeholder='No of person' id="numb_of_person"/>
  <br></br>
  <span className="currencyinput">$<input onChange={handlechange}  type="number" placeholder='Budget per person' id="budget"/></span>
  <br></br>

  <input  type="submit" value="submit"/>
   

</form>
  )
}

