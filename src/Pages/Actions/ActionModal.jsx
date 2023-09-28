import React from 'react';
import styled from 'styled-components';

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
`;

const Username = styled.h2`
  text-align: center;
  // Other styles
`;

const Detail = styled.p`
  // Styles for detail text
`;

const Button = styled.button`
  // Styles for buttons
`;

const ActionModal = ({ player, onClose }) => {
  return (
    <ModalBackground onClick={onClose}>
      <ModalCard onClick={(e) => e.stopPropagation()}>
        <Username>{player.username}</Username>
        <Detail>Company Income: {player.companyIncome}</Detail>
        <Detail>Total Income: {player.totalIncome}</Detail>
        <Detail>In-Game Tokens: {player.inGameTokens}</Detail>
        <Button>Build</Button>
        <Button>Improve</Button>
        <Button>Delete</Button>
      </ModalCard>
    </ModalBackground>
  );
};

export default ActionModal;
