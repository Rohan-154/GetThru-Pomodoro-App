import "../Cards/taskCard.css";
import { colors } from "./cardColor";
const TaskCard = ({ task, index, deleteTask }) => {
  const handleDelete = ()=>{
    deleteTask(index)
  }
  return (
    <>
      <div class="all-card-collection">
        <div class="card-container">
          <div style={{backgroundColor: colors[index % 5].primaryColor , height:'8px'}}></div>
          <main class="main-body">
            <h3 class="card-title" style={{color:colors[index % 5].secondaryColor}}>{task.Name}</h3>
            <p>{task.Description}</p>
          </main>
          <main class="main-body"> 
            <p>Don't miss this, Procastination is bad!</p>
          </main>
          <footer class="footer-card">
            <button class="btn-primary-card green-text" style={{color: colors[index % 5].primaryColor}}><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-primary-card red-color" onClick={handleDelete}><i class="fa-solid fa-trash"></i></button>
          </footer>
        </div>
        
      </div>
    </>
  );
};

export default TaskCard;
