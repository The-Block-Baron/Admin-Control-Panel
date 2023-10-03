import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

import ActionModal from './ActionModal';

const CardContainer = styled.div`
  border: 3px solid #3E3E3E;
  border-radius: 15px;
  background-color: #121212;
  padding: 20px;
  margin: 10px;
  width: 300px;
`;

const Username = styled.h2`
  text-align: center;
  font-family: 'Afogand';
  letter-spacing: 2px;
  margin-bottom: 40px;
`;

const ActionButton = styled.button`
  display: block;
  margin: 0 auto;
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
  &:hover {
    background-color: #ffffff;
    color: #151515;
    border: 1px solid #000000;
  }
`;

const ActionCard = ({ player }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const handleOpenModal = () => {
      setIsModalOpen(true);
    };
  
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };
  
    return (
      <CardContainer>
        <Username>{player.username}</Username>
        <ActionButton onClick={handleOpenModal}>Actions</ActionButton>
        {isModalOpen && (
          <ActionModal player={player} onClose={handleCloseModal} />
        )}
      </CardContainer>
    );
  };
  
  export default ActionCard;