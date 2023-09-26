// src/components/AdminLogin.jsx
import React, { useState } from 'react';
import { Title, LoginContainer, Container, Form, Button, Input } from './StyledAdminLogin';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you will handle the form submission and connect to the API
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <LoginContainer>
      <Title>Admin Login</Title>
      <Container>
        <Form onSubmit={handleSubmit}>
        <Input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            name="password"
            placeholder="Password"
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
