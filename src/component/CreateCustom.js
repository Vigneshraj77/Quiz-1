import React from 'react';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import InputPage from "./QuesInput"
import "./CreateCustom.css"
import Nav from './nav'
class CreateCustom extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      numberQuestion:null,
      Quizname :"",
      start: false,
      
    };
    this.CreateQues = this.CreateQues.bind(this); 
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    this.setState({ [event.target.name] : event.target.value}) 
    } 
  CreateQues(){
    
  this.setState({start : true});
  }
    render(){
     if(this.state.start === true){
      return(<InputPage number={this.state.numberQuestion} 
        timersec={0} timer={false} quizname={this.state.Quizname}/>);
     }
      return( 
          <div>
          <Nav />
          <Container>
          <div align = "center" style={{marginTop:"10px"}}>
        <Card style={{ width: '25rem' }} >
  <Card.Body>
    <h2>CREATE A QUIZ</h2>
            <div  className = "space"> 
            <input type="text" name="Quizname" placeholder="Give your quiz a name" onChange={this.handleChange} value={this.state.Quizname}/>
    <input type="number" step="5" min ="5"  name="numberQuestion" placeholder="No. of Questions" onChange={this.handleChange} value={this.state.numberQuestion}/>
    </div>
    <button style={{width:"fit-content"}} variant="primary" onClick={this.CreateQues}>NEXT STEP</button>
    </Card.Body>
    </Card></div>
</Container>  
</div>
)
    }
}

export default CreateCustom;