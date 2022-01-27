import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import { useAuth } from 'providers/AuthProvider';

export interface ILoginForm {
}

export const LoginForm = (props: ILoginForm): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { handleUserUpdate } = useAuth();
  const { register, handleSubmit } = useForm();

  const onSubmit = (values) => {
    setIsLoading(true);

    setTimeout(() => {
      const res = handleUserUpdate(values?.email);
      console.log(res);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container as="section">
      <Row className="justify-content-md-center">
        <Col sm={8}>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" {...register('email')} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" {...register('password')} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={isLoading}>
              {isLoading && <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />}{' '}
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
