import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheckSquare, faSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const Task = ({title, isCompleted, index, setTasksArray, tasksArray}) => {

  const handleUpdateTask = () => {
    const updatedTasksArray = [...tasksArray];
    updatedTasksArray[index].isCompleted = !isCompleted;
    setTasksArray(updatedTasksArray)
  };

  const handleDeleteTask = () => {
    setTasksArray(tasksArray.filter(task => task.title !== title))
  };

  return (
    <div className="task-container">
      <div className="task-name-container">
        <p>{title.toUpperCase()}</p>
      </div>          
      <div className="options-container">
        <FontAwesomeIcon icon={isCompleted ? faCheckSquare : faSquare} className="check-icon" onClick={handleUpdateTask}/>
        <FontAwesomeIcon icon={faTrash} className="delete-icon" onClick={handleDeleteTask}/>
      </div>
    </div>
  )
};

export default Task