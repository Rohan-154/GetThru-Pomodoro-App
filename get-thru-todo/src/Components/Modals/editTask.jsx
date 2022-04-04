import { useEffect, useState } from "react";
const EditTask = ({ modal, setModal, updateTask, task }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const handleUpdate = (e)=> {
      e.preventDefault();
      let tempObj = {};
      tempObj['Name'] = taskName
      tempObj['Description'] = description;
      updateTask(tempObj);
  }
  const handleInput = (e) => {
    const { name, value } = e.target;

    name === "taskName" ? setTaskName(value) : setDescription(value);
  };
  useEffect(()=>{
      setTaskName(task.Name);
      setDescription(task.Description);
  },[])
  return (
    <>
      <form className="form-submit">
        <lable htmlFor="task">
          {" "}
          Task Name
          <input
            className="input-task"
            id="task"
            type="text"
            placeholder="Enter task name"
            autoComplete="hidden"
            name="taskName"
            value={taskName}
            onChange={handleInput}
            required
          />
        </lable>
        <label>
          {" "}
          Description
          <textarea
            rows="5"
            className="textarea-des"
            value={description}
            onChange={handleInput}
            name="description"
          ></textarea>{" "}
        </label>

        <div className="btnDiv">
          <button onClick={(e) => handleUpdate(e)}> Update </button>
          <button onClick={(modal) => setModal(false)}> Discard </button>
        </div>
      </form>
    </>
  );
};

export { EditTask };
