import React,{useState,useEffect} from 'react'
import './App.css';

function App() {

const [x,setX] = useState("")
const [user,setUser] = useState([])

useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums/2/photos")
    .then(res => res.json())
    .then(data => setUser(data))
},[])
  return (
    <div className="App">
     <input type = "text" placeholder = "search" id = "input"
     onChange = {event => setX(event.target.value)}/>
     {user.filter(val => {
       if(x == ""){
         return val
       }else if(val.title.toLowerCase().includes(x.toLowerCase())){
         return val
       }
     }).map((val,key) => {
       return(
         <div className = "user" key = {val.id}>
           <a href = {val.url}>{val.title}</a>
         </div>
       )
     })}
    </div>
  );
}

export default App;
