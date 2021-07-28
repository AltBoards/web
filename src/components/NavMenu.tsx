import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-bootstrap-icons';

interface NavMenuProps { }

interface NavMenuState {
  collapsed: boolean
}

export class NavMenu extends Component<NavMenuProps, NavMenuState> {
  static displayName = NavMenu.name;

  constructor (props: NavMenuProps) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-lg navbar-toggleable-sm fixed-top bg-dark-transparent" dark>
          <Container>
            <NavbarBrand tag={Link} to="/"><img src="/img/logo.png" alt="AltBoards Logo" width="128" height="40" /></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />

            <Collapse className="navbar-collapse" isOpen={!this.state.collapsed} navbar>
              <ul className="navbar-nav">
                <NavItem>
                  <NavLink tag={Link} to="/"><Icon.House className="navbar-icon" /> Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/leaderboard"><Icon.CardList className="navbar-icon" /> Leaderboard</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/about"><Icon.People className="navbar-icon" /> About</NavLink>
                </NavItem>
              </ul>

              <ul className="navbar-nav ms-md-auto">
                <NavItem>
                  <NavLink href="https://github.com/AltBoards"><Icon.Github className="navbar-icon" /> GitHub</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/discord"><Icon.Discord className="navbar-icon" /> Discord</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/download"><Icon.BoxSeam className="navbar-icon" /> Download</NavLink>
                </NavItem>
              </ul>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
