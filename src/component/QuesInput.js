import React from 'react';
import {Card,Button} from 'react-bootstrap';
import Nav from './nav'
import Container from 'react-bootstrap/Container';
import './QuesInput.css';


class QuesInput extends React.Component{
    render(){
      return( 
        <div>
        <Nav />
                  <Container>
                  <div align = "center" style={{marginTop:"10px"}}>
                <Card style={{ width: '45%' }} >
          <Card.Body>
            <h2>CREATE A QUIZ</h2>
           <div  class = "space">   
            <input  placeholder="enter the question" /></div>
            <div  class = "space">
            <input  placeholder="option 1" /></div>
            <div  class = "space">
            <input  placeholder="option 2" /></div>
            <div  class = "space">
            <input  placeholder="option 3" /></div>
            <div  class = "space">
            <input  placeholder="option 4" /></div>
            <div class="row">
              <div class="col-sm-3">
                           <h3 style={{fontWeight:"normal"}}>MENTION CORRECT ANSWER</h3>
                           </div>
              <div class="col-sm-6">
            <select  className="custom-select" style={{height:"40px",fontSize:"18px"}}>
                  
                      <option value="1">option 1</option>
                      <option value="2">option 2</option>
                      <option value="3">option 3</option>
                      <option value="4">option 4</option>
                    </select>
                    </div>
                    </div>
                   <div class="space">
            <button style={{width:"fit-content"}} variant="primary">NEXT STEP</button>
            </div> </Card.Body>
            </Card></div>
        </Container>  
        </div>
)
    }
}

export default QuesInput;