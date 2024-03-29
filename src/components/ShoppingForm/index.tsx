import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

import products from 'data/products.json';
import inventory from 'data/inventory.json';

export interface IShoppingForm {
}

export const ShoppingForm = (props: IShoppingForm): JSX.Element => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { register, watch, handleSubmit } = useForm();
  const values = watch();

  const Product = ({ sku, name, price }) => {
    const avail = inventory.find(i => i.sku === sku);
    return  (
      <Form.Group as={Col}>
        <Form.Label htmlFor={sku}>{name}</Form.Label>
        <Form.Select id={sku} {...register(sku)} disabled={avail.quantity === 0} value={values[sku]}>
          <option value="">Select Quantity</option>
          {Array.from(Array(avail.quantity).keys()).map(i => <option value={i + 1}>{i + 1}</option>)}
        </Form.Select>
      </Form.Group>
    );
  };
  const onSubmit = async (formValues) => {
    setIsLoading(true);
    const res = await fetch('/api/checkout', {
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
          {products.map(product => <Product key={product.sku} {...product} />)}
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
            Get coupon
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};
