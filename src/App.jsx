import Header from "./components/Header";
import AddItem from "./components/AddItem";
import Task from "./components/Task";
import Message from "./components/Message"
import "./App.css";
import { useState } from "react";
function App() {
   const initialData=[{taskname:"doodh",date:"10-10-100"},{taskname:"doodh lelo ",date:"10-10-100"},{taskname:"doodh lelo naa", date:"10-10-100"}]
   const [data,setData]=useState(initialData);

   const deleteHandler=(taskName)=>{
    const finalData= data.filter(
      (item) => item.taskname !== taskName);
    setData(finalData);
   }

  return (
    <div className="body">
      <center className="todo-container">
        <Header />
        <AddItem  />
        { data.map((index)=>{ return <Task task={index.taskname} date={index.date} deleteTask={deleteHandler} />})}
      </center>
    </div>
  );
}
export default App;
