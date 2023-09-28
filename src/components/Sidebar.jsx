import React from 'react';
import { useState, useEffect } from 'react';

import groot from '../assets/Groot.png'
import { SidebarContainer, NavigationLink, ProfileContainer, ProfileImage, EmailText } from './StyledSidebar';

const Sidebar = ({ visible }) => {

  const [adminEmail, setAdminEmail] = useState('');

  useEffect(() => {
    const fetchAdminDetails = async () => {
      try {
        const response = await fetch('http://localhost:3004/auth/admin-details', {
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          setAdminEmail(data.email);
        } else {
          console.error('Failed to fetch admin details');
        }
      } catch (error) {
        console.error('Error during fetching admin details:', error);
      }
    };
    fetchAdminDetails()
  }, [])

  return (
    <SidebarContainer $isVisible={visible}>
      <NavigationLink to="/main">Dashboard</NavigationLink>
      <NavigationLink to="/players">Players</NavigationLink>
      <NavigationLink to="/states">States</NavigationLink>
      <NavigationLink to="/actions">Actions</NavigationLink>
      <ProfileContainer>
        <ProfileImage src={groot} alt="Admin Profile" />
        <EmailText>{adminEmail}</EmailText>
      </ProfileContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
