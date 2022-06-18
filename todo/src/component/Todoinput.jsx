import {useState} from "react";

export const Todoinput=({getData})=>{
const [text,setText]=useState("")
    return(
        <div>
            <input onChange={(e)=>{
            //console.log(e.target.value)
            setText(e.target.value)
            } }
            type="text" placeholder="enter todo"/>


            <button onClick={()=>{
                getData(text);
            }}>Add todo</button>
          
        </div>
    )

};


