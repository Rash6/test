import { useState } from "react"

export const Form=()=>{



    const [formdata,setFormdata]=useState({
        username:"",
        age:"",
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
};


    return(
        <form onSubmit={handlesubmit}>
            <input onChange={handlechange} 
            //used to change the value of inputbox from outside 
            value={formdata.username}
            type="text" 
            placeholder="enter name" 
            id="username"/>

            <input onChange={handlechange} 
            value={formdata.age}
            type="number" 
            placeholder="enter age" 
            id="age"/>

            <input onChange={handlechange} 
            value={formdata.email}
            type="text" 
            placeholder="enter email" 
            id="email"/>
            
            <input type="submit" value="submit"/>

        </form>
    )
}