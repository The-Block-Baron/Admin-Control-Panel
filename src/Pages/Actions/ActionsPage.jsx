import React from 'react';
import styled from 'styled-components';
import useActivePlayers from '../../customHooks/useActivePlayers';
import ActionCard from './ActionCard';

const ActionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const ActionsPage = () => {

    const { activePlayers, loading, error } = useActivePlayers();

  return (
    <ActionsContainer>
      {activePlayers.map(player => (
        <ActionCard key={player._id} player={player} />
      ))}
    </ActionsContainer>
  );
};

export default ActionsPage;
