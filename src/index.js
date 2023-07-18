import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from './components/AuthContext';
import App from './App';

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(
  <AuthProvider>
    <App />
  </AuthProvider>
);