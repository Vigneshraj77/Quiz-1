import React, { Component } from "react";
import he from "he";
import {Card} from 'react-bootstrap'
import Score from"./Score"

class quiz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isComplete: false,
            score: 0,
            incorrect: 0,
            index:0,
        };
        this.nextQuestion = this.nextQuestion.bind(this);
         }
         nextQuestion(selected,correct){
             if(selected === correct){
                 this.setState({score : this.state.score+1})
             }
             if(this.state.index===9){
                 console.log(this.state.score)
                 this.setState({isComplete: true})
                              }
             else{
             this.setState({index:this.state.index+1})
         }}
render(){
    if(this.state.isComplete === true){
        return( <Score  score={this.state.score} number={this.state.index+1}/>);
    }
    const question=he.decode(this.props.questions[this.state.index].question);
    const options=this.props.questions[this.state.index].incorrect_answers;
    const correctAnswer=he.decode(this.props.questions[this.state.index].correct_answer);
    console.log(correctAnswer)
    options.push(correctAnswer);
    options.sort();    
   return( 
       <div style={{alignContent:"justify",marginTop:"80px",marginLeft:"30%",width:"40%",marginRight:"30%",height:"fit-content"}}>
           <Card>
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
       </div>       
   )
};
}
export default quiz;