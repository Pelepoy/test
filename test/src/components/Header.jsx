import { Nav, Navbar, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
const Header = () => {
  return (
    <header>
      <Navbar className='bg-dark py-3' variant='dark' expand='md' collapseOnSelect>
        <Container>
          <Navbar.Brand href='/'>KOY BRAND</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/cart'> <FaShoppingCart /> Cart</Nav.Link>
              <Nav.Link href='/cart'> <FaUser /> Log In </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>


  )
}

export default Header
