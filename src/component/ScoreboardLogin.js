import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {Card} from "react-bootstrap"
import { loginAsScoreboardViewer } from '../reducers/scoreboard';
import { Container, Row, Col } from 'react-grid-system';
import Loader from './Loader';
import Input from './Input';
import Button from './Button';
import Nav from './nav'

const ScoreboardLogin = () => {
  const connected = useSelector(state => state.websocket.connected);
  const isLoading = useSelector(state => state.loader.active);
  const roomCodeValid = useSelector(state => state.teamApp.roomCode.valid);
  const roomCodeValue = useSelector(state => state.teamApp.roomCode.value);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(loginAsScoreboardViewer(roomCodeValue));
  };

  if (connected) {
    return <Redirect to={`/scoreboard/${roomCodeValue}`} />;
  } else if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <Nav />
    
    <Container fluid className="full-screen center">
    <Card style={{width:"25%",height:"60%"}}>
      <Row className="focus-center">      
        <Col>
          <Input
            reducer="teamApp"
            item="roomCode"
            labelText="Room code"
            placeholder="Enter 4-letter code"
            uppercase
            minLength="4"
            maxLength="4"
          />
          <Button onClick={handleClick} disabled={!roomCodeValid}>
            Join
          </Button>
        </Col>
      </Row>
      </Card>
    </Container>
    </div>
  );
};

export default ScoreboardLogin;