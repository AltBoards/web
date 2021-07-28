import React, { Component } from 'react';
import { Fade, Row } from 'reactstrap';
import { AboutCard } from './AboutCard';

export class About extends Component {
  static displayName = About.name;

  render () {
    return (
      <div>
        <Fade>
          <h1>About</h1>
          <p>AltBoards is an alternative open source leaderboard service (and more) for Beat Saber, created by Aika. We created AltBoards because we felt the need to create an alternative for people who don't like how competitive ScoreSaber is, or have an issue with ScoreSaber as a whole.</p>
          <p>This is a passion project for us, but we strive to create the best user experience possible for everyone regardless of skill. We hope you enjoy using our service as much as we enjoy making it.</p>
          <p>Have any questions that need answered? Join our Discord server!</p>

          <h1>Team</h1>
          <Row>
            <AboutCard image="/img/aika.jpg" name="Aika" subtitle="Creator & Lead Developer" description="I like spaghetti, not just code." />
            <AboutCard image="/img/goobie.png" name="Goobie" subtitle="Developer" description="You probably know me, as the (funny) multiplayer modder." />
          </Row>

          <h1>Credits & Shoutouts</h1>
          <p>AltBoards wouldn't have been possible, without the support of these people.</p>
          <Row>
            <AboutCard image="/img/riskivr.png" name="RiskiVR" subtitle="Beat Saber Legacy" description="I like old Beat Saber, maybe a little too much." />
            <AboutCard image="/img/pink.gif" name="Pink" subtitle="QuestBoard" description="Pink cute." />
          </Row>
        </Fade>
      </div>
    );
  }
}
