import React, { useState } from 'react'
import { questions } from './Data/faqQestions.jsx'

const Faqs = () => {
    let [currentId,setcurrentId]=useState(questions[0].id)
    let itesm=questions.map((itemsData,i)=>{

        let itemsDetails={
            itemsData,
            currentId,
            setcurrentId
        }

        return(
            <FaqItems itemsDetails={itemsDetails} key={i}/>
        )
    })
  return (
    <div>
      <h1>Frequently asked questions (FAQS) </h1>
      {itesm}
    </div>
  )
}

function FaqItems({itemsDetails}) {
     let {itemsData,currentId,setcurrentId}= itemsDetails;

    return (

<div className='faqItems'>
        <h2 onClick={()=>setcurrentId(itemsData.id)  }>{itemsData.question}</h2>
        <p className={currentId===itemsData.id ? 'activeAns' : ''}
        >{itemsDetails.itemsData.answer}</p>
      </div>
    )
}




export default Faqs
