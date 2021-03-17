import React from 'react';
import {Card} from 'react-bootstrap';
import Nav from './nav'

class HostEnd extends React.Component{
    constructor(props) {
        super(props);
    }
render(){          
      return(   
      <div style={{alignSelf:"center"}}>
          <Nav />
          <Card style={{width:"50%",marginLeft:"325px",}}>
<Card.Title>
    <h2>ROOM CODE : {this.props.roomcode}</h2>
</Card.Title>

              </Card>  
        </div>
)}
    }


export default HostEnd;