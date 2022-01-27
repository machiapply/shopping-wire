import React from 'react';
import { screen } from '@testing-library/react';
import { renderAllProviders } from 'test-helpers/testUtils';
import { ShoppingForm } from '..';

describe('ShoppingForm', () => {
  it('mounts', () => {
    renderAllProviders(<ShoppingForm />);
  });
});
