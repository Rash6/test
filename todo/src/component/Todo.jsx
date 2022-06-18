import { useState } from "react";
import {Todoinput} from "./Todoinput";
import { Todoitem } from "./Todoitem";
import {nanoid} from "nanoid";

function Todo(){

    const[todoList,setTodolist]=useState([])

    //call back

    const getData=(todo)=>{
        //console.log("received",todo)

        //create obj

        const payload={
            title:todo,
            status:false,
            id:nanoid(5)
        };


        setTodolist([...todoList,payload])
        //old arr and new arr
    };


    //call back for matching the id and marking it as done 
//     const newarr=todoList.map((e)=>{
//         if(e.id===id){
// return{
//     ...e,
//     status:!e.status
// }
//         }
//         return e;
//     })
//setTodolist(newarr)
    const handleStatus =(id)=>{

        //console.log("id",id);

        setTodolist(
            todoList.map((e)=>(e.id===id?{...e,status:!e.status}:e))
        )
    }
    return(
        <div>
            <Todoinput getData={getData}/>
            {todoList.map((e) => (
                <Todoitem todo={e} handleStatus={handleStatus}></Todoitem>
           ) )}
        </div>
    )
} 
export { Todo };