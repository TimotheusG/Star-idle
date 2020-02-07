import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Game from './game'
import Missions from './missions'

class GameContainer extends Component {    
  
  render() {
    return (
      <Tabs defaultActiveKey='game'>
      <Tab eventKey="game" title="Star Idle">   
      <Game></Game>
      </Tab>      
        <Tab eventKey="missions" title="Missions">
            <Missions></Missions>
        </Tab>        
      </Tabs>
    );
  }
}

export default GameContainer;