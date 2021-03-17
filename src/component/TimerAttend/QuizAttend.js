import React, { Component } from "react";
import Score from "./Score";
import { Container,Row,Col} from 'react-grid-system'
import Nav from './../nav'
import {Card} from 'react-bootstrap'
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import './CustomQuiz.css'
class TimerAttend extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            score: 0,
            incorrect: 0,
            index:0,
        };
        this.nextQuestion = this.nextQuestion.bind(this);
        this.nextQuestionTigger = this.nextQuestionTigger.bind(this);
         }
       
         nextQuestion(selected,correct){
             if(selected === correct){
                 this.setState({score : this.state.score+1})
             }
             if(this.state.index===(this.props.questions.questions).length-1){
                 console.log(this.state.score)
                 this.setState({isComplete: true})
                              }
             else{
             this.setState({index:this.state.index+1})
         }}
         nextQuestionTigger(){
            if(this.state.index===(this.props.questions.questions).length-1){
                console.log(this.state.score)
                this.setState({isComplete: true})
                             }
                             else{
            this.setState({index:this.state.index+1});}
            return [true,100]
       }

render(){
    if(this.state.isComplete === true){
        return( <Score  score={this.state.score} number={this.state.index+1}/>);
    }
    const question=this.props.questions.questions[this.state.index];
    const options=this.props.questions.options[this.state.index];
    const correctAnswer=this.props.questions.correctanswers[this.state.index];
    const renderTime = ({ remainingTime }) => {
        if (remainingTime === 0) {
          return <div className="timer">Too lale...</div>;
        }
        return (
          <div className="timer">
            <div className="text">Remaining</div>
            <div className="value">{remainingTime}</div>
            <div className="text">seconds</div>
          </div>
        );
      };
      
   return( 
       <div >
       <Nav />
       <Container>
       <Card>
           <Row>
               <Col lg={4} style={{fontSize:"18px"}}>
                   <h3>
          ROOM CODE : {this.props.questions.roomcode}</h3>
          <h3>
          ROOM NAME : {this.props.questions.roomname}</h3>
          </Col>
          < Col lg={4}>
          <div className="timer-wrapper"style={{Height:"30px"}}>
        <CountdownCircleTimer
          isPlaying
          duration={this.props.questions.timersec}
          strokeWidth={3}
          size={130}
          colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
          onComplete={() => this.nextQuestionTigger()}
        >
          {renderTime}
        </CountdownCircleTimer>
      </div>
          </Col>
          <Col lg={4}><h3 style={{fontSize:'18px'}}>
          HOSTED BY : {this.props.questions.host}</h3></Col>
          </Row>
          </Card>
           <Card style={{marginTop:"30px",marginLeft:"30%",width:"40%",marginRight:"30%",height:"fit-content"}}>
               <Card.Body>
               <Card.Title>Question No. {this.state.index+1}</Card.Title>
               <Card.Subtitle>
                   {question}
               </Card.Subtitle>
               <div style={{marginRight:"20%",marginLeft:"20%",marginBottom:"20px",width:"60%"}}>
               <button onClick={()=>this.nextQuestion(options[0],correctAnswer)}>{options[0]}</button>
               <button onClick={()=>this.nextQuestion(options[1],correctAnswer)}>{options[1]}</button>
               <button onClick={()=>this.nextQuestion(options[2],correctAnswer)}>{options[2]}</button>
               <button onClick={()=>this.nextQuestion(options[3],correctAnswer)}>{options[3]}</button>
               </div>
               </Card.Body>
            </Card>
            </Container>
       </div>       
   )
};
}
export default TimerAttend;