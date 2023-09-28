import styled from "styled-components";
import { NavLink } from 'react-router-dom';

export const SidebarContainer = styled.div`
  position: fixed;
  text-align: center;
  left: ${props => (props.$isVisible ? '0' : '-300px')};
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


export const NavigationLink = styled(NavLink)`
  color: #FFFFFF;
  text-decoration: none;
  margin-bottom: 80px;
  font-size: 20px;
  letter-spacing: 2px;
  position: relative;
  padding-right: 10px;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    width: 8px;
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




export const ProfileContainer = styled.div`
position: absolute;
  bottom: 30px;
  left: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const ProfileImage = styled.img`
  width: 40px;
  border: 1px solid #5B5B5B;
  border-radius: 20px;
`;

export const EmailText = styled.p`
margin-left: 20px;
  font-family: Inter;
  font-size: 12px;
  color: #5B5B5B;
`;