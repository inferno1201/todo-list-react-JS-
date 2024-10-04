import "../App.css";
import { useState } from "react";
const AddItem = () => {
  

  return (
    <>
      <div className="row">
        <div className="col-4">
          <input
            type="text"
            placeholder="enter task here"
          ></input>
        </div>
        <div className="col-3">
          <input
            type="date"
           
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success"
           
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddItem;
