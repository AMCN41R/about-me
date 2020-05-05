// react imports
import * as React from 'react';
import * as ReactDOM from 'react-dom';

// looking good
import './index.scss';

// the app
import App from 'ui/App';
import ErrorBoundary from 'ui/components/ErrorBoundary';

// lets go
ReactDOM.render(
  (
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  ),
  document.getElementById('app')
);
