const Task = ({task,date,deleteTask}) => {
  
  return (
    <>
      <div className="row">
        <div className="col-4"> {task}</div>
        <div className="col-3">{date}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger"
          onClick={(deleteTask(task))}>
            delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Task;
