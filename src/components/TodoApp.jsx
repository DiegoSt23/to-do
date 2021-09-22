import "../styles/TodoApp.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import Task from "./Task";
import Task2 from "./Task2";
import { useState, useEffect } from "react";

const TodoApp = () => {
  const [task, setTask] = useState("");
  const [tasksArray, setTasksArray] = useState(JSON.parse(localStorage.getItem("array")) || []);
  const [tasksArray2, setTasksArray2] = useState([]);
  const [class1, setClass1] = useState("category-selected");
  const [class2, setClass2] = useState("category");
  const [class3, setClass3] = useState("category");
  const [viewStatus, setViewStatus] = useState(true)
  
  const handleCreateTask = () => {
    if(task) {
      setTasksArray([...tasksArray, {title: task, isCompleted: false}]);
      setTask("");     
    }   
  };

  useEffect(() => {
    localStorage.setItem("array", JSON.stringify(tasksArray));    
  }, [tasksArray]);

  const tasksList = tasksArray.map((item, index) => <Task title={item.title} isCompleted={item.isCompleted} key={index} index={index} tasksArray={tasksArray} setTasksArray={setTasksArray}/>);
  
  const TaskList2 = tasksArray2.map((item, index) => <Task2 title={item.title} key={index}/>);

  const changeView = () => {
    setClass1("category-selected");
    setClass2("category");
    setClass3("category");
    setViewStatus(true)
  };

  const changeView2 = () => {
    setClass1("category");
    setClass2("category-selected");
    setClass3("category");
    setTasksArray2(tasksArray.filter(item => item.isCompleted === false));
    setViewStatus(false);
    
  };

  const changeView3 = () => {
    setClass1("category");
    setClass2("category");
    setClass3("category-selected"); 
    setTasksArray2(tasksArray.filter(item => item.isCompleted === true));
    setViewStatus(false);     
  };

  return (
    <>
      <div className="todo-app-main-container">
        <h2>To-Do App</h2>
        <div className="input-container">
          <input value={task} type="text" placeholder="Enter a task" onChange={e => {setTask(e.target.value)}}/>
          <FontAwesomeIcon icon={faPlusSquare} className="add-icon" onClick={handleCreateTask}/>
        </div>
        <div className="categories">
          <div className="category-container">
            <p className={class1} onClick={changeView}>All ({tasksArray.length})</p>
          </div>
          <div className="category-container2">
            <p className={class2} onClick={changeView2}>To do ({tasksArray.filter(item => item.isCompleted === false).length})</p>
          </div>
          <div className="category-container">
            <p className={class3} onClick={changeView3}>Done ({tasksArray.filter(item => item.isCompleted === true).length})</p>
          </div>        
        </div>
        <div className="todo-list-container">
          {viewStatus
            ? tasksList
            : TaskList2
          }
        </div>     
      </div>
    </>
  )
};

export default TodoApp