import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
  width: ${({ $isSidebarOpen }) => ($isSidebarOpen ? 'calc(100% - 300px)' : '100%')};
  font-family: Afogand;
  letter-spacing: 2px;
  height: 60px;
  background-color: #1B1B1B;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 40px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '300px' : '0')};
  z-index: 1000;
  transition: width 0.3s ease-in-out, left 0.3s ease-in-out;
  border-bottom: 4px solid #343434
`;

const ToggleButton = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  cursor: pointer;
  font-size: 20px;
  margin-left: 10px;
  margin-right: 50px;

  div {
    width: 24px;
    height: 24px;
    border: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '1px solid #000000' : '1px solid #FFFFFF')};
    border-radius: 12px;
    background-color: ${({ $isSidebarOpen }) => ($isSidebarOpen ? '#FFFFFF' : 'transparent')};
  }
`;

const HeaderTitle = styled.h1`
  font-size: 28px;
  span {
    font-size: 23px
  }


`

const ToggleandTitle = styled.div`
  display: flex;
` 

const LogoutText = styled.h6`
  cursor: pointer; // Makes the text clickable
  margin: 0; // Removes default margin
`;


const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate()

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

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
      <HeaderContainer $isSidebarOpen={isSidebarOpen}>
        <ToggleandTitle>
            <ToggleButton onClick={toggleSidebar} $isSidebarOpen={isSidebarOpen}>
                <div></div>
            </ToggleButton>
            <HeaderTitle>The block baron: <span>   Admin Panel Control</span></HeaderTitle>
        </ToggleandTitle>
        <LogoutText onClick={handleLogout}>Logout</LogoutText>
      </HeaderContainer>
      <Sidebar visible={isSidebarOpen}/>
    </>
  );
};

export default Header;
