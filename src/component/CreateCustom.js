import React from 'react';
import {Card} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import "./CreateCustom.css"
import Nav from './nav'
class CreateCustom extends React.Component{
    render(){
      return( 
          <div>
<Nav />
          <Container>
          <div align = "center" style={{marginTop:"10px"}}>
        <Card style={{ width: '25rem' }} >
  <Card.Body>
    <h2>CREATE A QUIZ</h2>
   <div  class = "space">   
    <input label="Quiz Title" placeholder="Quiz Code" /></div> 
    <select className="custom-select" style={{width:"70%",height:"30px"}}>
              <option value="0">Choose Type of Quiz</option>
              <option value="1">Time Based</option>
              <option value="2">Cut-Off Based</option>
              <option value="3">Level Based</option>
            </select>
            <div  class = "space"> 
    <input type="number" placeholder="No. of Questions" />
    </div>
    <Link to="/createques">
    <button style={{width:"fit-content"}} variant="primary">NEXT STEP</button>
    </Link>
    </Card.Body>
    </Card></div>
</Container>  
</div>
)
    }
}

export default CreateCustom;