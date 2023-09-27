import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import groot from '../assets/Groot.png'

const SidebarContainer = styled.div`
  position: fixed;
  left: ${props => (props.visible ? '0' : '-300px')};
  top: 0;
  height: 100vh;
  width: 300px;
  background-color: #1B1B1B;
  font-family: 'Afogand', sans-serif;
  color: #FFFFFF;
  padding: 20px;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 90px 0 0 0;
  transition: left 0.3s ease-in-out;
`;


const NavigationLink = styled(NavLink)`
  color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 80px;
  font-size: 20px;
  letter-spacing: 2px;
  position: relative;
  padding-right: 10px; // Add some padding to make room for the curved border

  // Define styles for the active state
  &.active::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 7px;
    background-color: #FFFFFF;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    top: -10px; 
    bottom: -10px; 
  }

  &:hover,
  &:visited,
  &:focus {
    color: #FFFFFF;
    text-decoration: none;
  }
`;




const ProfileContainer = styled.div`
  position: absolute;
  bottom: 10px;
  left: 30px;
`;


const ProfileImage = styled.img`
  width: 40px;
`;

const EmailText = styled.p`
  // Style the email text
`;

const Sidebar = ({ email, visible }) => {
  return (
    <SidebarContainer visible={visible}>
      <NavigationLink to="/main" activeClassName="active">Dashboard</NavigationLink>
      <NavigationLink to="/players">Players</NavigationLink>
      <NavigationLink to="/states">States</NavigationLink>
      <NavigationLink to="/actions">Actions</NavigationLink>
      <ProfileContainer>
        <ProfileImage src={groot} alt="Admin Profile" />
        <EmailText>{email}</EmailText>
      </ProfileContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
