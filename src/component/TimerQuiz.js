import React from 'react';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import InputPage from "./QuesInput"
import "./CreateCustom.css"
import Nav from './nav'
class TimerQuiz extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      numberQuestion:null,
      Quizname :"",
      start: false,
      timerSec:0,
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
      return(<InputPage number={this.state.numberQuestion} quizname={this.state.Quizname}
        timersec={this.state.timerSec} timer={true}/>);
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
    <input type="number" min ="1"  name="numberQuestion" placeholder="No. of Questions" onChange={this.handleChange} value={this.state.numberQuestion}/>
    </div>
    <div className = "space">
        <p style={{fontSize:"20px"}}>Enter the seconds for each question</p>
    <select name="timerSec" onChange={this.handleChange} value={this.state.timerSec} className="custom-select" style={{height:"40px",fontSize:"18px"}}>
                      <option value="30">30</option>
                      <option value="60">60</option>
                      <option value="90">90</option>
                      <option value="120">120</option>
                    </select>
    </div>
    <button style={{width:"fit-content"}} variant="primary" onClick={this.CreateQues}>NEXT STEP</button>
    </Card.Body>
    </Card></div>
</Container>  
</div>
)
    }
}

export default TimerQuiz;