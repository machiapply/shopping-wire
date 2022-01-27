import React from 'react';
import { screen } from '@testing-library/react';
import { renderAllProviders } from 'test-helpers/testUtils';
import { LoginForm } from '..';

describe('LoginForm', () => {
  it('mounts', () => {
    renderAllProviders(<LoginForm />);
  });
});
