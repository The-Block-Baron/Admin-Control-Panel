import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  background: #121212;
  padding: 20px;
  border-radius: 15px;
  color: #FFFFFF;
  padding: 70px;
  border: 3px solid #3E3E3E;
`;

const Username = styled.h2`
  text-align: center;
  font-family: afogand;
  font-size: 30px;
  letter-spacing: 2px;
  margin-top: -40px;
  margin-bottom: 40px;
`;

const Detail = styled.p`
  Font-family: Inter;
`;


const Button = styled(NavLink)` 
  padding: 10px 20px;
  font-family: 'Afogand';
  letter-spacing: 2px;
  cursor: pointer;
  font-family: Afogand;
  letter-spacing: 2px;
  max-width: 150px;
  font-size: 20px;
  background-color: #151515;
  color: #fff;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s;
  border-radius: 15px;
  text-decoration: none;

  &:hover {
    background-color: #ffffff;
    color: #151515;
    border: 1px solid #000000;
  }
  margin-right: 20px; // Adjust the value as needed
  &:last-child {
    margin-right: 0; // Ensure that the last button does not have a right margin
  }
`;

const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  margin-bottom: -25px;
`;

const ActionModal = ({ player, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <Username>{player.username}</Username>
        <Detail>Company Income: {player.companyIncome}</Detail>
        <Detail>Total Income: {player.totalIncome}</Detail>
        <Detail>In-Game Tokens: {player.inGameTokens}</Detail>
        <ButtonContainer>
          <Button to={'/build'}>Build</Button>
          <Button>Improve</Button>
          <Button>Delete</Button>
        </ButtonContainer>
      </ModalCard>
    </ModalBackground>
  );
};

export default ActionModal;
