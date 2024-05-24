                                                                    <!-- <Header email="ws@gmail.com" > -->



                                                                    <!-- Using Children props -->
<!-- <Header email="ws@gmail.com" >
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
      </h1> -->

                                                              <!-- how to pass object to child component -->

<!-- <Container>
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

                                                                         <!-- How to add font awesome icon -->
<!-- <Header email="ws@gmail.com" >
        <h1>welcome to header section2</h1>
        <FontAwesomeIcon icon={faWhatsapp} className="text-danger" />
      </Header> -->

                                                                         <!-- how to use setup tailwind css -->

<!-- follow https://tailwindcss.com/docs/guides/create-react-app -->

                                                              <!-- How to import css & images in react   -->
<!-- import logo from './logo.svg'; -->

                                                                                       <!-- Events handing -->
<!-- let dispalyData=()=>{
    alert("stay work hard")
  }
  return 
    <div className="App">
      
      <button onClick={dispalyData}>click</button> -->

                                                                                   <!-- parameter function -->
<!-- let addData=(a,b)=>{
    console.log(a,b)
   }
   <button onClick={()=>addData(10,30)}>click2</button> -->

                                                                            <!-- Hooks(usestate in hooks) -->
<!-- let [count,setCount] =useState(1)

   let display=()=>{
    setCount(count+1)
    console.log(count)
    
   }

   <button onClick={display}>{count}click0</button> -->

                                                            <!-- Conditional statements(if ealse statement) -->
<!-- let temlate='';
   let [count,setCount] =useState(1)
   let[pshow,setpshow]=useState(false)

   if (pshow){
    temlate= <><button onClick={()=>setpshow(!pshow)}>hide</button>
    <p>welcome to ws</p></>
   }
   else{
    temlate= <button onClick={()=>setpshow(!pshow)}>show</button>
   }
    return (
    <div className="App">
      <Header email="ws@gmail.com" >
        <h1>welcome to header section2</h1>
        <FontAwesomeIcon icon={faWhatsapp} className="text-danger" />
      </Header>
      {temlate} -->




                                                         <!-- ternary operator -->
<!-- let [status,setstatus]=useState(false);

  return (
    <div className="App">
      <button onClick={()=>setstatus(!status)}>
        {(status ? 'hide' : 'show')}
      </button>
{(status) ?

     <p>welcomm</p>
     :
     ''} -->

                                                                <!-- Module style -->
<!-- 3.33 -->

                                                  <!-- show or hide password -->
<!-- let [pstatus,setStatus]=useState(false);
<input className={modul.margin} type={pstatus ? 'text' : 'password'} /> 
<button onClick={()=>setStatus(!pstatus)}>
  {pstatus ? 'hide' : 'show'}
</button> -->


                                                                        <!-- responsive menu -->








