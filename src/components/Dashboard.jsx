import React from 'react';
import styled from 'styled-components';

import ActivePlayersContainer from './ActivePlayersContainer';
import Leaderboard from './Leaderboard';

const Dash = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 140px;
`


const Dashboard = () => {
  return (
    <Dash>
      <ActivePlayersContainer />
      <Leaderboard/>
    </Dash>
  );
};

export default Dashboard;
