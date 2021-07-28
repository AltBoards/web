import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Leaderboard } from './components/Leaderboard';
import { About } from './components/About';
import { Download } from './components/Download';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import './App.css';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/about' component={About} />
        <Route path='/download' component={Download} />
      </Layout>
    );
  }
}
