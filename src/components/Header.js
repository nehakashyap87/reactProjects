import React from 'react'
import { Container,Dropdown,FormControl,Navbar,Nav,Badge } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg="dark" variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to='/'>Shopping Cart</Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl style={{width:500}}
                placeholder='Search' className='m-auto'/>
            </Navbar.Text>
            <Nav>
                |<Dropdown alignright="true" >
                    |<Dropdown.Toggle variant='success'>
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minHeight: 370}}>
                        <span style={{padding:10}}>Cart is Empty!</span>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header