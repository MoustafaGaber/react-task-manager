import { useState ,useEffect} from 'react';
import './App.css';
import axios from 'axios';

 

function App() {
  const [name,SetName]=useState('asd')
  const [age,setAge]=useState(null)
  
  
  const fetchAxios=()=>{
    axios.get(`https://api.agify.io/?name=${name}`)
          .then((res)=>{
            setAge(res.data)
          })
          
  }
  useEffect(()=>{
    fetchAxios()
  },[])
  
  const handelClick=()=>{
    fetchAxios()
    
  }

  return (
    <>
      <div>
       <button onClick={handelClick} >Predict Age</button>
       <p><input type="text" onChange={(e)=> SetName(e.target.value)} /></p>
       <h1>{age?.name}</h1>
       <h1>{age?.age}</h1>
       <h1>{age?.count}</h1>
     
      </div>
    </>
  );
}

export default App;
