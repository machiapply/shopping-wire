import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export interface INavigation {
}

export const Navigation = (props: INavigation): JSX.Element => {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Link href="/" passHref>
          <Navbar.Brand>
            Food bank flow
          </Navbar.Brand>
          </Link>
        <Nav className="me-auto">
          <Link href="/" passHref>
            <Nav.Link>Donate</Nav.Link>
          </Link>
          <Link href="/shop" passHref>
            <Nav.Link>Shop</Nav.Link>
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
