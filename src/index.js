// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import todo_store from './store/store';
import { Provider } from 'react-redux';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={todo_store}>
    <App />
  </Provider>
);
