import React, { Component } from 'react'
import {Navbar , Nav, NavItem, MenuItem, NavDropdown, Row, Col  } from 'react-bootstrap'

export default class NavigationBar extends Component {
  render() {
    return (
        <div>
        <Row className = "Header-tag show-grid">
            <Col md={1} sm={1}>
            <img src="http://www.sab.ac.lk/images/xlogo-new.png.pagespeed.ic.QSSA4l4ctS.png" alt="Sabaragamuwa University of Sri Lanka"/>
            </Col>
            <Col md={11} sm={11}>
            <h1>Sabaragamuwa University of Sri Lanka</h1>
            </Col>
            
            
        </Row>
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/Home">Home</a>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavDropdown eventKey={1} title="Department" id="basic-nav-dropdown">
                <MenuItem eventKey={1.1}>Computing & Information Systems</MenuItem>
                <MenuItem eventKey={1.2}>Food Science & Technology</MenuItem>
                <MenuItem eventKey={1.3}>Natural Resources</MenuItem>
                <MenuItem eventKey={1.4}>Physical Science & Technology</MenuItem>
                <MenuItem eventKey={1.5}>Sport Management & Physical Education</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} href="/extra">Extracuryculam</NavItem>
            <NavItem eventKey={3} href="/contact">Contact</NavItem>
            <NavItem eventKey={4} href="/about">About</NavItem>
    
            
            </Nav>
            <div className="right-nav">
            <Nav pullRight>
                <NavItem eventKey={1} href="/signIn">SignIn</NavItem>
            </Nav>
            </div>
        </Navbar>;  

      </div>
    )
  }
}
