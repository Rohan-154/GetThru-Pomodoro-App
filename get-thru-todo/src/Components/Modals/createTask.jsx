import { useState } from "react";
const CreateTask = ({ modal, setModal, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const handleAppend = (e) => {
    e.preventDefault();
    const taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    save(taskObj);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;

    name === "taskName" ? setTaskName(value) : setDescription(value);
  };
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
          <button onClick={(e) => handleAppend(e)}> Save </button>
          <button onClick={(modal) => setModal(false)}> Discard </button>
        </div>
      </form>
    </>
  );
};

export { CreateTask };
