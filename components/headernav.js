/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
// import Container from './container'

export default function HeaderNav() {
  return (
    <Container>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <a sx={{ padding: 2 }}>Home</a>
            </Link>
            <Link href="/what-we-believe" passHref>
              <a sx={{ padding: 2 }}>What We Believe</a>
            </Link>
            <Link href="/our-staff" passHref>
              <a>Our Staff</a>
            </Link>
            <NavDropdown title="About Us" id="basic-nav-dropdown">
              <Link href="what-we-believe" passHref>
                <NavDropdown.Item>What We Believe</NavDropdown.Item>
              </Link>
              <NavDropdown.Item href="our-staff" as={Link}>
                Our Staff
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  )
}
