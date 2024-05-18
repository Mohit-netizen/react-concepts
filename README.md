<!-- <Header email="ws@gmail.com" >



<!-- Using Children props -->
<Header email="ws@gmail.com" >
        <h1>welcome to header section2</h1>
      </Header>
      result
      
      
      import React from 'react'
      import p from 'react'

      const Header = ({email,children} ) => 
      console.log(p)
      return 
       <h1>
       Welcome to Header Section {email}{children}
      </h1>

<!-- how to pass object to child component -->

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
} -->

