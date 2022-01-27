import React from 'react';
import { screen } from '@testing-library/react';
import { renderAllProviders } from 'test-helpers/testUtils';
import { Navigation } from '..';

describe('Navigation', () => {
  it('mounts', () => {
    renderAllProviders(<Navigation />);
  });
});
