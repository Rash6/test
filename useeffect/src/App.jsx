import { useState,useEffect } from 'react';
import './App.css';

function App() {
  
  const [todos,setTodos]=useState([])

  useEffect(()=>{
    async function getData(){
    const data=await fetch(" http://localhost:8080/users")
    .then((d)=>d.json())
    setTodos(data);
}
getData();
},[])
  
  return (
    <div className="App">
      {todos.map((todo)=>(
        <div>
          {todo.id}-{todo.name}
        </div>
      ))}
    </div>
  );
}

export default App;
