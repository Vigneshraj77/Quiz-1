import React from 'react';
import {Card} from 'react-bootstrap';
import Nav from './nav'
import Container from 'react-bootstrap/Container';
import './QuesInput.css';
import HostEnd from "./HostEnd"

class QuesInput extends React.Component{
  constructor(props) {
    super(props);
  this.state={
    index : 0,
    selected: 0,
    option1 : "",
    option2 : "",
    option3 : "",
    option4 : "",
    question : "",
    questionArray : [],
    optionsArray : [],
    correctAnswers:[],
  };
  this.clearInputs = this.clearInputs.bind(this);
  this.nextQues = this.nextQues.bind(this); 
  this.finished = this.finished.bind(this);
  this.handleChange = this.handleChange.bind(this); 
  }
  finished(){
    this.nextQues();
    const roomcode= Math.floor(1000 + Math.random()*9000);
    const questions=this.state.questionArray;
    const options=this.state.optionsArray;
    const correctoption=this.state.correctAnswers;
    const host = localStorage.getItem("name");

    fetch('https://aqueous-waters-26248.herokuapp.com/api/users/hostquestion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        roomname:this.props.quizname,
        roomcode:roomcode,
        questions:questions,
        options:options,
        correctanswers:correctoption,
        host : host,
        timer : this.props.timer,
        timersec : this.props.timersec,
      })
    }).then((res) => res.json(roomcode))
    .catch((error) =>
      alert("Show me error that cannot be specify", error)
    )
    .then((response) => {
      console.log("Success:", response);
      if(response.roomcode){
        return( <HostEnd roomcode={roomcode} />);
    }}); 
  }
  nextQues(){
    let { questionArray, optionsArray, correctAnswers } = this.state;
    const options=[this.state.option1,this.state.option2,this.state.option3,this.state.option4];
    questionArray.push(this.state.question);
    optionsArray.push(options);
    correctAnswers.push(options[this.state.selected]);
    this.setState({questionArray: questionArray});
    this.setState({optionsArray : optionsArray});
    console.log(this.state.correctAnswers);
    this.setState({correctAnswers : correctAnswers});
    this.setState({index : this.state.index +1});
    this.clearInputs();
  }
  clearInputs(){
    this.setState({question : ""});
    this.setState({option1 : ""});
    this.setState({option2 : ""});
    this.setState({option3 : ""});
    this.setState({option4 : ""});
  }
  handleChange(event){
    this.setState({ [event.target.name] : event.target.value}) 
    }   
    render(){
      const number=this.props.number;
      const quizname=this.props.quizname;
      const Button=()=>{
        if(this.state.index === number-1){
          return(
          <button style={{width:"fit-content"}} variant="primary" onClick={this.finished}>HOST</button>);
            }
            else{
              return(
             <button style={{width:"fit-content"}} variant="primary" onClick={this.nextQues}>NEXT QUESTION</button>)
            }
      }
      return( 
        <div>
        <Nav />
                  <Container>
                  <div align = "center" style={{marginTop:"10px"}}>
                <Card style={{ width: '45%' }} >
                  <Card.Title><h2 style={{fontSize:"25px"}}>{quizname}</h2></Card.Title>
                  <Card.Subtitle>Question No. {this.state.index+1}</Card.Subtitle>
          <Card.Body>
            
           <div  className = "space">   
            <textarea  style={{resize: 'none',width:"75%",height:"50px",textAlign:"center",fontSize:"30px"}} 
            name="question" placeholder="enter the question" onChange={this.handleChange}
             value={this.state.question}/></div>
            <div  className = "space">
            <input name="option1"  placeholder="option 1"onChange={this.handleChange} 
             value={this.state.option1} /></div>
            <div  className = "space">
            <input name="option2" placeholder="option 2" onChange={this.handleChange} value={this.state.option2}/></div>
            <div  className = "space">
            <input name="option3" placeholder="option 3" onChange={this.handleChange} value={this.state.option3}/></div>
            <div  className = "space">
            <input name="option4" placeholder="option 4" onChange={this.handleChange} value={this.state.option4} /></div>
            <div className="row">
              <div className="col-sm-3">
                           <h3 style={{fontWeight:"normal"}}>MENTION CORRECT ANSWER</h3>
                           </div>
              <div className="col-sm-6">
            <select name="selected" onChange={this.handleChange} value={this.state.selected} className="custom-select" style={{height:"40px",fontSize:"18px"}}>
                      <option value="0">option 1</option>
                      <option value="1">option 2</option>
                      <option value="2">option 3</option>
                      <option value="3">option 4</option>
                    </select>
                    </div>
                    </div>
                  <Button />
                        </Card.Body>
            </Card></div>
        </Container>  
        </div>
)
    }
}

export default QuesInput;