import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PopUp from './PopUp';
import PredefQues from "./PredefQues"
import Home from './Home';
import CreateCustom from "./CreateCustom"
import Room from './RoomHome';
import Main from '.././components/core/Main.jsx';
import RecoverButton from './RecoverButton';
import Login from './Login/Login.js';
import Signup from './Signup/Signup.js';
import Nav from './nav';
import QuesInput from './QuesInput'
import LevelHome from './LevelHome'
import TimerQuiz from './TimerQuiz'
const AppRoute = () => {
  const crashed = useSelector(state => state.websocket.crashed);
  const popUpActive = useSelector(state => state.popUp.active);

  return (
    <Router basename={window.location.pathname || ''}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Signup />
        </Route>
        <Route path="/question">
          <Main />
        </Route>
        <Route path="/createcustom">
          <CreateCustom />
        </Route>
        <Route path="/leveltype">
          <LevelHome />
        </Route>
        <Route path="/nav">
          <Nav />
        </Route>
        <Route path="/Createques">
          <QuesInput />
        </Route>
        <Route path="/predefinedques">
          <PredefQues />
        </Route>
        <Route path="/Room">
          <Room />
        </Route>
        <Route path="/TimerQuiz">
          <TimerQuiz />
        </Route>
    
      </Switch>
      {crashed && <RecoverButton />}
      {popUpActive && <PopUp />}
    </Router>
  );
};

export default AppRoute;
