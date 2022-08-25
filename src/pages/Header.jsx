import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar expand="lg" style={{backgroundColor: '#184C99'}}>
            <Container style={{borderBottom: '2px solid lightblue', padding: '10px'}}>
              <Navbar.Brand className='text-white' href="/">Создай опросник</Navbar.Brand>
              <Navbar.Toggle className='text-black bg-white' aria-controls="basic-navbar-nav" />
              <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                  <Nav.Link href="/"><Link className='text-white' to='/'>Главная</Link></Nav.Link>
                  <Nav.Link href="/"><Link className='text-white' to='/faq'>FAQ</Link></Nav.Link>
                  <Nav.Link href="/"><Link className='text-white' to='/register'><ExitToAppIcon /></Link></Nav.Link>
                  <Nav.Link href="/"><Link className='text-white' to='/login'><AccountCircleIcon /></Link></Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
        </Navbar>
      </>
    )
  }
}