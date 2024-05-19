import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Button, Card, Col ,Container, Row } from 'react-bootstrap';
import { blog } from './Data/blog';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import modul from "./button.module.css"


 
function App() {
// responsive menu









  let dispalyData=()=>{
    alert("stay work hard")
  }
   let addData=(a,b)=>{
    console.log(a,b)
   }
   let temlate='';
   let [count,setCount] =useState(1)
   let[pshow,setpshow]=useState(false)

   if (pshow){
    temlate= <><button onClick={()=>setpshow(!pshow)}>hide</button>
    <p>welcome to ws</p></>
   }
   else{
    temlate= <button onClick={()=>setpshow(!pshow)}>show</button>
   }

   let display=()=>{
    setCount(count+1)
    console.log(count)
    
   }

  

  //  ternary operator
  let [status,setstatus]=useState(false);






  //  show or hide password
  let [pstatus,setStatus]=useState(false);

  

   

  return (
    <div className="App">
{/* responsive menu */}
<button className='micon'>&#9776;</button>
     <div className='menu'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Course</li>
        <li>Gallery</li>
        <li>Contact</li>
      </ul>
     </div>









<hr/>
      <button onClick={()=>setstatus(!status)}>
        {(status ? 'hide' : 'show')}
      </button>
{(status) ?

     <p>welcomm</p>
     :
     ''}

     <hr className={modul.margin}/>

  {/* show or hide password */}





<input className={modul.margin} type={pstatus ? 'text' : 'password'} /> 
<button onClick={()=>setStatus(!pstatus)}>
  {pstatus ? 'hide' : 'show'}
</button>

<hr className={modul.margin} />

      <Header   email="ws@gmail.com" >
        <h1 >welcome to header section2</h1>
        <FontAwesomeIcon icon={faWhatsapp} className="text-danger" />
      </Header>
      {temlate}
     
      <p>welcome2</p>
      <div>
      <button onClick={display}>{count}click0</button>
      <button onClick={dispalyData}>click</button>
      <button onClick={()=>addData(10,30)}>click2</button></div>
      {/* <Container>
      <Row>
        <Col className='col-12 text-center py-4'>
          <h1>Our Courses</h1>
        </Col>
      </Row>
      <Row>
        <Col lg="3" md="6" className="mx -2 mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg="3" md="6" className="mx-2 mb-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container> */}
    
    <Container>
      <Row>
        {/* {blog.map((v,i)=> {
        return(
        <ProductItems pitems={v} key={i}/>
      )
    })} */}
        
      
      
      </Row>
    </Container>

    </div>
  );
}

export default App;

function ProductItems({pitems}){
  return(
   <Col >
    <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{pitems.title}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
   </Col>
  )
}
