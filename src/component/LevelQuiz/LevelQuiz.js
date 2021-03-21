import React, { Component } from "react";
import Score from "./Score";
import { Container,Row,Col} from 'react-grid-system'
import Nav from './../nav'
import {Card} from 'react-bootstrap'

class LevelQuiz extends Component {
   
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            score: 0,
            incorrect: 0,
            index:0,
            message:"",
            level:1,
        };
        this.nextQuestion = this.nextQuestion.bind(this);
        this.fetchnext = this.fetchnext.bind(this);
     }
     componentDidMount(){
         this.setState({level : this.props.questions.level});
     }
         nextQuestion(selected,correct){
             if(selected === correct){
                 this.setState({score : this.state.score+1})
             }
             const percent=(this.state.score / ((this.props.questions.questions).length))*100;
             if(this.state.index===(this.props.questions.questions).length-1){
                 console.log(this.state.score)
                 if(this.state.level == this.props.questions.totallevel){
                    this.setState({message:"You have completed all the level!!"});
                    this.setState({isComplete: true});
                 }
                 else if(percent >= this.props.questions.cutoff){
                    this.setState({level : this.state.level + 1});
                    this.fetchnext();
                 }
                 else{
                   this.setState({message:"Sorry!!, You are not eligible for next level."});
                    this.setState({isComplete: true});
                 }
                              }
             else{
             this.setState({index:this.state.index+1})
         }}
        fetchnext(){
                const roomcode = this.state.roomcode;
                const level = this.state.level;
                fetch(`https://aqueous-waters-26248.herokuapp.com/api/users/levelques?roomcode=${roomcode}&level=${level}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then((response) => response.json())
            .then((data) => {
              if(data.success ){
                  console.log(data.questions);
                  this.props.questions=data.questions;
              }
              else {
                  return(<h2>ERROR</h2>)
              }
            })
         /*   .catch((error) =>
            alert("Show me error that cannot be specify", error)
            ); */
        } 
render(){
    if(this.state.isComplete === true){
        return( <Score  score={this.state.score} number={this.state.index+1}/>);
    }
    const question=this.props.questions.questions[this.state.index];
    const options=this.props.questions.options[this.state.index];
    const correctAnswer=this.props.questions.correctanswers[this.state.index];
   return( 
       <div >
       <Nav />
       <Container>
       <Card >
           <Row>
               <Col lg={4} style={{fontSize:"18px"}}>
                   <h3>
          ROOM CODE : {this.props.questions.roomcode}</h3>
          <h3>
          ROOM NAME : {this.props.questions.roomname}</h3>
          </Col>
          <Col lg={4}>
              LEVEL : {this.props.questions.level} Out of {this.props.questions.totallevel}
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
export default LevelQuiz;