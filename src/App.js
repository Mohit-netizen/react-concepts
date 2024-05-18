import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { Button, Card, Col ,Container, Row } from 'react-bootstrap';
import { blog } from './Data/blog';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


 
function App() {
  let dispalyData=()=>{
    alert("stay work hard")
  }
   let addData=(a,b)=>{
    console.log(a,b)
   }


  return (
    <div className="App">
      <Header email="ws@gmail.com" >
        <h1>welcome to header section2</h1>
        <FontAwesomeIcon icon={faWhatsapp} className="text-danger" />
      </Header>
      <button onClick={dispalyData}>click</button>
      <button onClick={()=>addData(10,30)}>click2</button>
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
        {blog.map((v,i)=> {
        return(
        <ProductItems pitems={v} key={i}/>
      )
    })}
        
      
      
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
