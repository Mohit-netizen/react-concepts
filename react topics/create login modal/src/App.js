import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {

  let [modalStatus,setModalStatus]= useState (false)
  return (
   
    <div className="App">
       <button className='Enquire' onClick={()=>setModalStatus(true)}>Enquire Now</button>
   <div onClick={()=>setModalStatus(false)} className={`modalOverLay ${modalStatus?'modalShow':''}`}></div>
   <div className={`Modaldiv ${modalStatus?'Showmodal':''}`}>
    <h3>Enquiry Now <span onClick={()=>setModalStatus(false)}>&times;</span></h3>
   </div>
    </div>
  );
}

export default App;
