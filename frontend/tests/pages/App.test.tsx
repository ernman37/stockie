import React from 'react';
import { render } from '@testing-library/react';
import { act } from 'react';  // Import act from react
import App from '../../src/pages/App';  // Adjust the path as needed

test('App Tests', () => {
  act(() => {
    render(<App />);
  });
});