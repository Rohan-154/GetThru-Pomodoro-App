import "../Cards/taskCard.css";
import { EditTask } from "../Modals/editTask.jsx";
import { colors } from "./cardColor";
import { useState } from "react";
const TaskCard = ({ task, index, deleteTask, updateListArray }) => {
  const handleDelete = () => {
    deleteTask(index);
  };
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const updateTask = (obj) => {
    updateListArray(obj,index)
  }
    return (
      <>
        <div class="all-card-collection">
          <div class="card-container">
            <div
              style={{
                backgroundColor: colors[index % 5].primaryColor,
                height: "8px",
              }}
            ></div>
            <main class="main-body">
              <h3
                class="card-title"
                style={{ color: colors[index % 5].secondaryColor }}
              >
                {task.Name}
              </h3>
              <p>{task.Description}</p>
            </main>
            <main class="main-body">
              <p>Don't miss this, Procastination is bad!</p>
            </main>
            <footer class="footer-card">
              <button
                class="btn-primary-card green-text"
                style={{ color: colors[index % 5].primaryColor }}
                onClick={() => setModal(true)}
              >
                <i class="fa-solid fa-pen-to-square"></i>
              </button>
              <button class="btn-primary-card red-color" onClick={handleDelete}>
                <i class="fa-solid fa-trash"></i>
              </button>
            </footer>
          </div>
         
        </div>
        <EditTask modal={modal} updateTask={updateTask} task= {task}/>
      </>
    );
  };


export default TaskCard;
