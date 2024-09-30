import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Task from "./components/Task";
import Message from "./components/Message"
import "./App.css";
import { useState } from "react";
function App() {
  
  const [data,setData]=useState([]);

  const handleItem=(newTask,newDate)=>{
      const finalData=[...data,...[{task:newTask,date:newDate}]];
      setData(finalData);
  }

  const handleDelete=(taskName)=>{
      const finalData= data.filter(
        (item) => item.task !== taskName);
      setData(finalData);
  }   
  return (
    <div className="body">
      <center className="todo-container">
        <Header />
        <AddItem addTask={handleItem}/>
        {data.length === 0 && <Message></Message>}
        {data.map((item)=>{return <Task task={item.task} date={item.date} deleteTask={handleDelete}/>})}
      </center>
    </div>
  );
}
export default App;
