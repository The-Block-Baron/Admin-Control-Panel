import React, { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 65%;
  max-width: 1050px;
  padding-left: 20px
`;

const ActivePlayersContainer = () => {
  const [activePlayers, setActivePlayers] = useState([]);

  useEffect(() => {
    const fetchActivePlayers = async () => {
        try {
          const response = await fetch('http://localhost:3004/api/v1/admin/players/active', {
            method: 'GET',
            credentials: 'include', // Include credentials for cross-origin requests
          });
      
          if (!response.ok) {
            throw new Error('Failed to fetch active players');
          }
      
          const activePlayers = await response.json();

          setActivePlayers(activePlayers)

          // Handle the active players data
        } catch (error) {
          console.error('Error fetching active players:', error);
        }
      };
      

    fetchActivePlayers();
  }, []);

  return (
    <Container>
      {activePlayers.map(player => (
        <PlayerCard key={player._id} player={player} />
      ))}
    </Container>
  );
};

export default ActivePlayersContainer;
