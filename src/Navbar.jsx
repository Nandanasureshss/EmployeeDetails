import React from 'react';
import Container from 'react-bootstrap/Container';
import './Navbar.css';

function NavbarLandingPage() {
  return (
    <div>
      <nav className="navbarlandingpage">
        <Container>
          <div className="navrightlandingpage">
            <button className="custombtnlandingpage">LOGIN</button>
            <button className="custombtnlandingpage">REGISTRATION</button>
          </div>
        </Container>
      </nav>
    </div>
  );
}

export default NavbarLandingPage;
