import React from 'react';
import { Component } from 'react';
import {Card} from 'react-bootstrap';

 class Score extends Component {
    constructor(props) {
        super(props);}
        render(){
return(
    <div>
        <Card>
       <Card.Title>
          <h2> SCORE</h2>
       </Card.Title>
       <Card.Body>
           <h2>You have answered {this.props.score} correct out of {this.props.number}</h2>
       </Card.Body>
        </Card>
    </div>
);
 }}
 export default Score;