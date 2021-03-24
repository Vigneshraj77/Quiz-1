import React from 'react';
import {Card} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import InputPage from "./LevelInput"
import "./CreateCustom.css"
import Nav from './nav'
class LevelHome extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      numberQuestion:null,
      Quizname :"",
      start: false,
      timerSec:0,
      cutoff:null,
      totallevel:null,
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
        timersec={this.state.timerSec} timer={false} cutoff={this.state.cutoff} totallevel={this.state.totallevel}/>);
     }
      return( 
          <div>
          <Nav />
          <Container>
          <div align = "center" style={{marginTop:"10px"}}>
        <Card style={{ width: '25rem' }} >
  <Card.Body>
    <h2>CREATE A LEVEL-BASED QUIZ</h2>
            <div  className = "space"> 
            <input type="text" name="Quizname" placeholder="Give your quiz a name" onChange={this.handleChange} value={this.state.Quizname}/>
    <input type="number" min ="1"  name="numberQuestion" placeholder="No. of Questions" onChange={this.handleChange} value={this.state.numberQuestion}/>
    </div>
    <div className = "space">
              <input type="number" min ="1"  name="cutoff" placeholder="Enter the cutoff in percentage" onChange={this.handleChange} value={this.state.cutoff}/>
              <input type="number" min ="1"  name="totallevel" placeholder="Enter No. Of Level" onChange={this.handleChange} value={this.state.totallevel}/>
    </div>
    <button style={{width:"fit-content"}} variant="primary" onClick={this.CreateQues}>NEXT STEP</button>
    </Card.Body>
    </Card></div>
</Container>  
</div>
)
    }
}

export default LevelHome;