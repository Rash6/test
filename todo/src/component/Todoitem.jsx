//import {Todo} from "./Todo";

export const Todoitem=({todo,handleStatus})=>{

    return(
        <div>
            {todo.title}-{todo.status?"done":"not done"}-{todo.id}
            <button onClick={()=>handleStatus(todo.id)}>Toogle</button>
        </div>
    )
}