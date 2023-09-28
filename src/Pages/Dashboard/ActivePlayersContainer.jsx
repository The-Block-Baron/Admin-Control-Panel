import React, { useEffect, useState } from 'react';
import PlayerCard from '../Actions/PlayerCard';
import styled from 'styled-components';
import useActivePlayers from '../../customHooks/useActivePlayers';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  max-width: 1050px;
  padding-left: 20px
`;

const ActivePlayersContainer = () => {

  const { activePlayers, loading, error } = useActivePlayers();

  return (
    <Container>
      {activePlayers.map(player => (
        <PlayerCard key={player._id} player={player} />
      ))}
    </Container>
  );
};

export default ActivePlayersContainer;
