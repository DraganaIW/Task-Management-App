import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Board from './components/Board';
import { AuthProvider } from './components/AuthContext';
import Home from './components/Home';
import Workspace from "./components/Workspace";
import { WorkspaceProvider } from "./context/WorkspaceContext";
import ErrorBoundary from "./components/ErrorBoundary"
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <ErrorBoundary>
      <WorkspaceProvider>
      <Provider store={store}>
        <Router>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LoginForm />} />
              <Route path="/home" element={<Home />} />
              <Route path="/taskboard" element={<Board />} />
              <Route path="/workspace" component={<Workspace/>} />
            </Routes>
          </AuthProvider>
        </Router>
        </Provider>
      </WorkspaceProvider>
    </ErrorBoundary>
  );
};

export default App;
