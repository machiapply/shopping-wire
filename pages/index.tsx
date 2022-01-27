import { useState, useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Head from 'next/head'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import { useAuth } from 'providers/AuthProvider';
import { LoginForm } from 'components/LoginForm';
import packages from 'data/packages.json';
import products from 'data/products.json';

export default function Home() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, watch, handleSubmit } = useForm();
  const values = watch();
  // const totalPrice = useMemo(() => {
  //   const 
  // }, []);

  const Package = ({ name, id, items }) => {
    const itemsData = items.map(item => {
      return products.find(p => p.sku === item);
    });
    const packagePrice = itemsData.reduce((acc, curr) => acc + curr.price, 0);
    return  (
      <Form.Group as={Col}>
        <Form.Label htmlFor={id}>{name}</Form.Label>
        <ul>
          {itemsData.map(item => {
            return (
              <li>{item.name} ${item.price}</li>
            );
          })}
        </ul>
        <Form.Select id={id} {...register(id)} value={values[id]}>
          <option value="">Select Quantity</option>
          {Array.from(Array(10).keys()).map(i => <option value={i + 1}>{i + 1}</option>)}
        </Form.Select>

        ${packagePrice * (Number(values[id]) || 0)}
      </Form.Group>
    );
  };
  const onSubmit = async (formValues) => {
    setIsLoading(true);
    const res = await fetch('/api/checkin', {
      method: 'POST',
      body: JSON.stringify(formValues)
    });
    console.log(res)

    setTimeout(() => {
      // update inventory
      setIsLoading(false);
    }, 1000);

  };

  return (
    <Container as="section">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          {packages.map(package => <Package key={package.id} {...package} />)}
        </Row>

        <Form.Group as="section">
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading && <Spinner
              as="span"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />}{' '}
            Donate
          </Button>
        </Form.Group>
      </Form>
    </Container>
  )
}
