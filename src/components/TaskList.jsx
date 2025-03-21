import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, deleteTask, complete }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <Task
          key={index}
          task={task.text}
          isGreen={task.isGreen}
          del={() => deleteTask(index)}
          complete={() => complete(index)}
        />
      ))}
    </div>
  );
};

export default TaskList;