import React from 'react';
import {Card} from 'react-bootstrap';
import Nav from './nav'
import CustomQuiz from './CustomQuiz/CustomQuiz.js'
import TimerAttend from './TimerAttend/QuizAttend.js'
import LevelQuiz from './LevelQuiz/LevelQuiz.js';

class RoomHome extends React.Component{
    constructor(props) {
        super(props);
      this.state={
          roomcode:"",
          questions:[],
          Running : false,
      };
      this.handleChange = this.handleChange.bind(this); 
      this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(){
        const roomcode = this.state.roomcode;
        fetch(`https://aqueous-waters-26248.herokuapp.com/api/users/roomques?roomcode=${roomcode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => response.json())
    .then((data) => {
      if(data.success ){
          console.log(data.questions);
          this.setState({questions : data.questions});
          this.setState({Running : true})
      }
      else {
          return(<h2>ERROR</h2>)
      }
    })
 /*   .catch((error) =>
    alert("Show me error that cannot be specify", error)
    ); */
} 
    handleChange(event){
        this.setState({ [event.target.name] : event.target.value}) 
    }
render(){
    if(this.state.Running === true){
    if(this.state.questions.timer){
        return(<TimerAttend questions={this.state.questions}/>);
    }
    else if(this.state.questions.cutoff != 0){
        return(<LevelQuiz questions={this.state.questions} />);
        
    }
    else{
        return(
<CustomQuiz questions={this.state.questions}/>);
    }}
             
      return( 
         
      <div style={{alignSelf:"center"}}>
          <Nav />
          <Card style={{width:"50%",marginLeft:"325px"}}>
<Card.Title>
    <h2>Enter Room Code</h2>
</Card.Title>
<Card.Body>
    <input style={{width:"50%"}} type="number" name="roomcode" value={this.state.roomcode} onChange={this.handleChange}/>
<button style={{width:"40%",border:"1px solid black",margin:"10px 30% 10px 30%"}}
   onClick={this.onSubmit}>Start Quiz</button>
</Card.Body>
              </Card>  
        </div>
)}
    }


export default RoomHome;