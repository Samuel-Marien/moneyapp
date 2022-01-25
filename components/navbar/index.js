import React from 'react'
import Link from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { FcMoneyTransfer } from 'react-icons/fc'
import { FaPiggyBank, FaHome } from 'react-icons/fa'

const MyNavbar = () => {
  return (
    <Container className="col-12 col-sm-6 mt-0 mt-sm-5 p-0">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a className="text-secondary text-decoration-none fw-bold">
                <FcMoneyTransfer size={30} /> Money{' '}
                <span className="text-success fw-light">App</span>
              </a>
            </Link>
          </Navbar.Brand>
          <Nav className="ms-auto">
            <Link href="/">
              <a className="text-secondary text-decoration-none me-4 d-flex flex-column align-items-center">
                <FaHome size={25} />
                <span className="text-sm d-none d-sm-block">Home</span>
              </a>
            </Link>
            <Link href="/newData">
              <a className="text-secondary text-decoration-none d-flex flex-column align-items-center">
                <FaPiggyBank size={25} />
                <span className="d-none d-sm-block">Add</span>
              </a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default MyNavbar
