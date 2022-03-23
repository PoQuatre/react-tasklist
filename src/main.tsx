import { StrictMode } from 'react';
import { render } from 'react-dom';

import { App } from './App';

const root = document.getElementById('root');
if (root) {
  render(
    <StrictMode>
      <App />
    </StrictMode>,
    root,
  );
} else {
  // eslint-disable-next-line no-console
  console.error('There is no #root element in the dom');
}
