import React from 'react'
import Link from 'next/link'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

import { FcMoneyTransfer } from 'react-icons/fc'
import { FaPiggyBank, FaHome } from 'react-icons/fa'

const MyNavbar = () => {
  return (
    <Container className="mt-5 w-50 p-0">
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
                <span className="text-sm">Home</span>
              </a>
            </Link>
            <Link href="/newData">
              <a className="text-secondary text-decoration-none d-flex flex-column align-items-center">
                <FaPiggyBank size={25} />
                <span>Add</span>
              </a>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </Container>
  )
}

export default MyNavbar
