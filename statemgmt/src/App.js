//import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [data,setData]=useState("")


  const getData=(e)=>{
console.log("re from chilt to parem=nt",e)
setData(data)


  }


  return (
    <div className="App">
    <First getData={getData}/>
    <Second data={data}/>

    </div>
  );
}


function First({getData}){
  //console.log(data)
  const data="hello c1";
getData(data)
  return <div>First child</div>
}



function Second({data}){
  console.log("c2",data)
  return <div>Second child</div>
}
export default App;
