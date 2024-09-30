import "../App.css";
import { useState } from "react";
const AddItem = ({ addTask }) => {
  const [newTask, setNewTask] = useState();
  const [newDate, setNewDate] = useState();

  const handleTask = (event) => {
    setNewTask(event.target.value);
  };
  const handleDate = (event) => {
    setNewDate(event.target.value)
  };
  const handleNewTask = () => {
    addTask(newTask, newDate);
    setNewTask("")
    setNewDate("")
  };

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="enter task here"
            value={newTask}
            onChange= {
              handleTask
            }
          ></input>
        </div>
        <div className="col-3">
          <input
            type="date"
            value={newDate}
            onChange={
              handleDate
            }
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              handleNewTask();
            }}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItem;
