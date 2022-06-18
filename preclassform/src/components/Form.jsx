import { useState } from "react"

export const Form=()=>{

    //form state with object
    const[formstate,setFormstate]=useState({
        username:"",
        age:""
    })

    //handlechange function to get the value from input 

    const handleChange=(e)=>{
        //console.log(e)
        if(e.target.id==="username"){
            setFormstate({
                ...formstate,
                username:e.target.value
            })
        }

        if(e.target.id==="age"){
            setFormstate({
                ...formstate,
                age:e.target.value
            })
        }
    }

    //handlesubmit function to submit to the form

const handleSubmit=(e)=>{
e.preventDefault();
console.log("Data",formstate)
}



    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} type="text" placeholder="enter the name" id="username"></input>
            <input onChange={handleChange} type="number" placeholder="enter the age" id="age"></input>
        
            <input type="submit" value="submit"/>
        </form>
    )
}