/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';

export default function NavBar({ user }) {
  // const user = useAuth();
  // console.warn('photo', user);
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>📚 Simply Books 📚</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="ml-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link>Books</Nav.Link>
            </Link>
            <Link passHref href="/book/new">
              <Nav.Link>Create Book</Nav.Link>
            </Link>
            <Link passHref href="/authors">
              <Nav.Link>Authors</Nav.Link>
            </Link>
            <Link passHref href="/author/new">
              <Nav.Link>Create Author</Nav.Link>
            </Link>
            <Link passHref href="/profile">
              <Nav.Link>
                <img
                  src={user.photoURL}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                  }}
                  alt="profile avatar"
                />
              </Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

NavBar.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
    photoURL: PropTypes.string,
  }).isRequired,
};
