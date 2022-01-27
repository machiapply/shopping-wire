import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { useAuth } from 'providers/AuthProvider';
import { LoginForm } from 'components/LoginForm';

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <>    
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            Foodbank Wire
          </Navbar.Brand>
        </Container>
      </Navbar>
      {currentUser ? 'content' : <LoginForm />}
    </>
  )
}
