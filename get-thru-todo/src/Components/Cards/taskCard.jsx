import "../Cards/taskCard.css";
const TaskCard = ({ task, index }) => {
  return (
    <>
      <div class="all-card-collection">
        <div class="card-container">
          <main class="main-body">
            <h3 class="card-title">{task.Name}</h3>
            <p>{task.Description}</p>
          </main>
          <main class="main-body">
            <p>Don't miss this, Procastination is bad!</p>
          </main>
          <footer class="footer-card">
            <button class="btn-primary-card green-text"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="btn-primary-card red-color"><i class="fa-solid fa-trash"></i></button>
          </footer>
        </div>
        
      </div>
    </>
  );
};

export default TaskCard;
