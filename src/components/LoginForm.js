import React, { useState, useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import background from '../images/background.jpg';
import { WorkspaceContext } from '../context/WorkspaceContext';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BackgroundImage = styled(motion.img)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: -1;
`;

const LoginFormContainer = styled(motion.div)`
  background-color: #f0f8ff;
  border: 1px solid #498dda;
  border-radius: 8px;
  width: 400px;
  padding: 2rem;
`;

const Header = styled(motion.header)`
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 2rem;
`;

const Title = styled.h2`
  font-weight: 500;
  margin: 0;
  text-align: left;
`;

const Input = styled.input`
  height: 20px;
  margin-top: 10px;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 1rem;
`;

const PasswordInput = styled(Input)`
  margin-top: 20px;
`;

const StyledButton = styled.button`
  background-color: #498dda;
  border-radius: 6px;
  color: white;
  border-color: #498dda !important;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  width: fit-content;
  padding: 0 12px;
  margin: 20px auto;
  font-family: 'Lato', sans-serif !important;
`;

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setAuthenticated } = useContext(WorkspaceContext);
  const navigate = useNavigate();

  const emailInputRef = useRef(null)

  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthenticated(true);
    navigate('/home');
  };

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  return (
    <Container>
      <BackgroundImage
        src={background}
        alt="Background Image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1 }}
      />
      <LoginFormContainer
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <Header
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Task Management
        </Header>
        <form onSubmit={handleSubmit}>
          <div>
            <Title>Email</Title>
            <Input
              type="email"
              id="email-input"
              value={email}
              ref={emailInputRef}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <Title>Password</Title>
            <PasswordInput
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <StyledButton type="submit">Log in</StyledButton>
        </form>
      </LoginFormContainer>
    </Container>
  );
};

export default LoginForm;
