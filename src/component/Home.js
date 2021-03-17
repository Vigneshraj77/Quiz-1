import React from 'react';
import { Container, Row, Col, Hidden } from 'react-grid-system';
import { Link } from 'react-router-dom';

import Nav from './nav';
import Button from './Button';

const Card = ({ title, subtitle, link, button }) => (
  <div className="card" style={{marginLeft:'0px'}}>
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <Link to={link}>
      <Button>{button}</Button>
    </Link>
  </div>
);

const Home = () => {
  return (
    <div>
    <Nav/>
    <Container className="home-page top-anxiety" style={{marginTop:"40px"}}>
      <Row>
        <Hidden xs>
          <Col lg={3}>
            <Card
              title="Quizz Host"
              subtitle="host a Quizz Night!"
              link="/createcustom"
              button="Start!"
            />
          </Col>
        </Hidden>
        <Col lg={3}>
          <Card
            title="Room"
            subtitle="join a Quizz Night!"
            link="/Room"
            button="Join!"
          />
        </Col>
        <Hidden xs>
        <Col lg={3}>
            <Card
              title="Scoreboard"
              subtitle="Set up a scoreboard of your Quizz and view the rankings!"
              link="/Room"
              button="View!"
            />
          </Col>
        </Hidden>
        <Col lg={3}>
          <Card
            title="PreLoaded Question"
            subtitle="Attempt a quiz with questions that are already available.Select a Category, Field and Difficulty."
            link="/predefinedques"
            button="Attempt!"
          />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Home;
