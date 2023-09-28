import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const LeaderboardContainer = styled.div`
  background-color: #121212;
  border-radius: 15px;
  padding: 20px;
  margin: 10px;
  width: 35%;
  max-width: 730px;
  color: #FFFFFF;
  border: 3px solid white;
  display: flex;
  flex-direction: column;
  height: 650px;
`;

const Title = styled.h2`
  text-align: center;
  font-family: 'Afogand', sans-serif;
  letter-spacing: 2px;
  margin-bottom: 50px;
  font-size: 30px;
`;

const LoadingText = styled.p`
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
`;

const PlayerList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const PlayerListItem = styled.li`
  display: flex;
  font-family: Inter;
  justify-content: space-between;
  border-bottom: 1px solid #3E3E3E;
  padding: 30px 10px;
  align-items: center;
  font-size: 15px;
`;

const HeaderRow = styled.div`
  display: flex;
  font-family: Afogand;
  font-size: 16px;
  letter-spacing: 2px;
  justify-content: space-between;
  font-weight: bold;
  padding-bottom: 10px;
  border-bottom: 2px solid #3E3E3E;
  margin-bottom: 10px;
`;

const Column = styled.span`
  width: 33%; // Divide the width equally among the three columns
  text-align: center;
`;

export const Button = styled.button`
  font-family: Afogand;
  letter-spacing: 3px;
  padding: 25px 40px;
  max-width: 300px;
  font-size: 20px;
  background-color: #151515;
  color: #fff;
  border: 1px solid #a9a9a9;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.5s;
  border-radius: 15px;
  align-self: center;
  margin-top:1%;
  &:hover {
    background-color: #ffffff;
    color: #151515;
    border: 1px solid #000000;
  }
`;

const Leaderboard = () => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch('http://localhost:3004/api/v1/admin/players/leaderboard', {
          method: 'GET',
          credentials: 'include', // Include credentials in the request
        });
        if (response.ok) {
          const data = await response.json();
          setPlayers(data);
        } else {
          console.error('Failed to fetch leaderboard:', response.statusText);
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching leaderboard:', error);
        setLoading(false);
      }
    };
  
    fetchLeaderboard(); // Fetch the leaderboard initially

    const intervalId = setInterval(fetchLeaderboard, 3600000); // Re-fetch every hour

    return () => clearInterval(intervalId); // Clear the interval when the component is unmounted
  }, []);

  return (
    <LeaderboardContainer>
      <Title>Leaderboard</Title>
      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <HeaderRow>
            <Column>Username</Column>
            <Column>Total Tokens</Column>
            <Column>Total Income</Column>
          </HeaderRow>
          <PlayerList>
            {players.map((player, index) => (
              <PlayerListItem key={index}>
                <Column>{player.username}</Column>
                <Column>{player.inGameTokens} Tokens</Column>
                <Column>{player.totalIncome}</Column>
              </PlayerListItem>
            ))}
          </PlayerList>
          <Button>ACTIONS</Button>
        </>
      )}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
