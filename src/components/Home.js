import React, { Component } from 'react';
import { Fade } from 'reactstrap';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <Fade>
          <h3>Welcome to AltBoards!</h3>
          <p>Alternative leaderboards for Beat Saber.</p>
        </Fade>
      </div>
    );
  }
}
