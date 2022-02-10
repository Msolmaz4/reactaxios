import React from 'react'
import { Container,Navbar} from 'react-bootstrap'

 function NavbarCom() {
  return (
   <Navbar sticky ='top' bg='primary' variant='dark'>
       <Container>
            <Navbar.Brand href='#home'>Contact form</Navbar.Brand>
       </Container>
   </Navbar>
  )
}
export default NavbarCom;