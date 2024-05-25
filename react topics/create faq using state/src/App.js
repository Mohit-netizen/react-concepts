import logo from './logo.svg';
import './App.css';
import { questions } from './Data/faqQuestions';
import { useState } from 'react';

function App() {
  let [showAns,setShowAns]=useState(questions[0].id)
  return (
    <div className="App">
      <div className='faq'>
        <h1>Frequently asked quations</h1>
        <div className="faqouter">

        {questions.map((faqItems, i) => {
  return (
    <div className="faqItems" key={i}>
      <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question}</h2>
      <p className={showAns==faqItems.id ? 'activeAns' : ''}>{faqItems.answer}</p>
    </div>
  )
})}



          </div>
        </div>
      </div>
      
  
  )
}

export default App;
