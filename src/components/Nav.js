import React from 'react';

import Container from 'react-bootstrap/Container';
import NavB from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
  return (
    <>
      <Navbar className='nav_container'>
        <Container>
          <NavB>
            <NavB.Link href="/">home</NavB.Link>
            <NavB.Link href="/about">about</NavB.Link>
          </NavB>
        </Container>
      </Navbar>
      <br />

    </>
  );
}

export default Nav;