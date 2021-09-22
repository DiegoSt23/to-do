const Task2 = ({title}) => {
  return (
    <div className="task-container">
      <div className="task-name-container" style={{textAlign: "center", width: "100%"}}>
        <p>{title.toUpperCase()}</p>
      </div>          
    </div>
  )
};

export default Task2