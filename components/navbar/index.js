import React from 'react'
import Link from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link href="/">
            <a className="text-secondary text-decoration-none">Money App</a>
          </Link>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <Link href="/">
            <a className="text-secondary text-decoration-none me-4">Home</a>
          </Link>
          <Link href="/newData">
            <a className="text-secondary text-decoration-none">Add</a>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
