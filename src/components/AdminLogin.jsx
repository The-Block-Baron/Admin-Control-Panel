// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import { Title, LoginContainer, Container, Form, Button, Input } from './StyledAdminLogin';
import { useNavigate } from 'react-router-dom';

const AdminLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      console.log("Form Submitted");
      e.preventDefault();
  
      try {
        const response = await fetch('http://localhost:3005/auth/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password }),
          credentials: 'include', 
        });
  
        if (!response.ok) {
          const data = await response.json();
          throw new Error(data.message || 'Invalid credentials');
        }
  
        navigate('/main');
      } catch (error) {
        setError(error.message);
      }
    };

  return (
    <LoginContainer>
      <Title>Admin Login</Title>
      <Container>
        <Form onSubmit={handleSubmit}>
        <Input
            type="email"
            name="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="PASSWORD"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Login</Button>
        </Form>
      </Container>
    </LoginContainer>
  );
};

export default AdminLogin;
