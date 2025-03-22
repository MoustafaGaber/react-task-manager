import React from 'react';


const getapidata=()=>{
  
}

const Task = ({ task, del, isGreen, complete }) => {
  return (
    <div>
      <h1 style={{ color: isGreen ? 'green' : 'black' }}>{task}</h1>
      <button onClick={complete}>Complete</button>
      <button onClick={del}>Delete Task</button>
    </div>
  );
};

export default Task;
