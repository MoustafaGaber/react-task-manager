import { useState ,useEffect} from 'react';
import './App.css';
import TaskList from './components/TaskList';
import axios from 'axios';

 const getfetch=()=>{
  fetch('https://catfact.ninja/fact')
        .then((res)=>res.json())
        .then((data)=>{
          console.log(data.fact)
        })
 }
 const getAxios=()=>{
  axios.get('https://catfact.ninja/fact')
  .then((res)=>{    
    console.log(res.data)
    
        })
 }

function App() {
  const [catFact,setCatFact]=useState(null)
  const [inputTask, setInputTask] = useState('');
  const [tasks, setTasks] = useState([]);

 const getApiFromAxion=()=>{
 
 } 

 useEffect(()=>{
          
 },[])
  
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
        <button onClick={getApiFromAxion} >Cat Fact</button>
        <p> {catFact} </p>
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
