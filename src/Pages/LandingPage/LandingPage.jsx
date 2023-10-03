// src/components/LandingPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LandingContainer, Title, Button, Paragraph, Container } from './StyledLanding';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleAdminLogin = () => {
    navigate('/admin-login');
  };

  return (
    <LandingContainer>
      <Title>💰 Welcome to the block baron admin control panel 💰</Title>
      <Paragraph>Hello, Administrator! You're in command of the kingdom's routes and pathways. Ensure our world remains a land of adventure and intrigue. Let the journey begin!</Paragraph>
      <Container>
        <Button onClick={handleAdminLogin}>Login as Admin</Button>
        <Button>Login as Player</Button> 
      </Container>
    </LandingContainer>
  );
};

export default LandingPage;
