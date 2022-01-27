import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

import { useAuth } from 'providers/AuthProvider';
import { LoginForm } from 'components/LoginForm';
import { ShoppingForm } from 'components/ShoppingForm';

export default function Home() {
  const { currentUser } = useAuth();
  return (
    <>    
      {currentUser ? <ShoppingForm /> : <LoginForm />}
    </>
  )
}
