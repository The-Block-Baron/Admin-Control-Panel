import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

import { HeaderContainer, ToggleandTitle, ToggleButton, HeaderTitle, LogoutText } from './StyledHeader';

const Header = ({$isSidebarOpen, toggleSidebar}) => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      // Make a POST request to the /logout endpoint
      const response = await fetch('http://localhost:3004/auth/logout', {
        method: 'POST',
        credentials: 'include', // Include credentials for cross-origin requests
      });

      if (response.ok) {
        navigate('/');
      } else {
        console.error('Failed to logout');
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <>
      <HeaderContainer $isSidebarOpen={$isSidebarOpen}>
        <ToggleandTitle>
            <ToggleButton onClick={toggleSidebar} $isSidebarOpen={$isSidebarOpen}>
                <div></div>
            </ToggleButton>
            <HeaderTitle>The block baron: <span>   Admin Panel Control</span></HeaderTitle>
        </ToggleandTitle>
        <LogoutText onClick={handleLogout}>Logout</LogoutText>
      </HeaderContainer>
      <Sidebar visible={$isSidebarOpen}/>
    </>
  );
};

export default Header;
