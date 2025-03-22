import { useState ,useEffect} from 'react';
import './App.css';
import axios from 'axios';

 

function App() {
  const [excuse,setExcuse]=useState('')
  
  const getApi=(excuseType)=>{

    axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuseType}/`).then(
      (res)=>{
        console.log(res.data[0].excuse)
        setExcuse(res.data[0].excuse)
      }
    )
  }
  useEffect(()=>{
    getApi()
  },[])
    
  
  return (
    <>
      <div>
        <h1>Generate an execute</h1>
        <p><button onClick={()=>getApi('party')} >party</button></p>
        <p><button onClick={()=>getApi('family')}>family</button></p>
        <p><button onClick={()=>getApi('office')}>office</button></p>
        <p>{excuse}</p>
       
     
      </div>
    </>
  );
}

export default App;
