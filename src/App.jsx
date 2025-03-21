import { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

function App() {
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const changeHandel = (e) => {
    setInputTask(e.target.value);
  };

  const addTask = () => {
    setTasks([...tasks, { text: inputTask, isGreen: false }]);
    setInputTask(''); // Clear input after adding
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const complete = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, isGreen: !task.isGreen } : task
      )
    );
  };

  return (
    <>
      <div>
        <h1>this is app component</h1>
        <input onChange={changeHandel} value={inputTask} type="text" />
        <button onClick={addTask}>add Task</button>
        <br />
        <TaskList tasks={tasks} deleteTask={deleteTask} complete={complete} />
      </div>
    </>
  );
}

export default App;
