import { useEffect, useState } from "react";
import TaskCard from "../Cards/taskCard";
import { CreateTask } from "../Modals/createTask";
import "../Todos/todos.css";
const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  useEffect(() => {
    const localStrorageTask = JSON.parse(localStorage.getItem("taskList"));
    if (localStrorageTask) setTaskList(localStrorageTask);
  }, []);

  const saveTask = (taskObject) => {
    let tempList = taskList;
    tempList.push(taskObject);
    localStorage.setItem("taskList", JSON.stringify(taskList));
    setTaskList(tempList);

    setModal(false);
  };
  return (
    <>
      <div className="task-N-List">
        <div className="task-append">
          <h1>Welcome Back!</h1>
          <button
            className="btn-com btn-primary-outline"
            onClick={(modal) => setModal(true)}
          >
            {" "}
            Create Task{" "}
          </button>
        </div>

        <div className="todoList"></div>
        {modal && (
          <CreateTask modal={modal} setModal={setModal} save={saveTask} />
        )}
      </div>
      <div className="taskCard">
        {  taskList && taskList.map((task,index)=> <TaskCard task = {task} index = {index}/>)}
      </div>
    </>
  );
};

export { TodoList };
