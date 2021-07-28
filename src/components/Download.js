import React, { Component } from 'react';
import { Fade } from 'reactstrap';

export class Download extends Component {
  static displayName = Download.name;

  render() {
    return (
      <div>
        <Fade>
          <h3>Download</h3>
          <p>NOTE: Currently, AltBoards is an Oculus Quest-only leaderboard service. We plan to expand to PC in the coming weeks.</p>
        </Fade>
      </div>
    );
  }
}
