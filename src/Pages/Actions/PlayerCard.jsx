import React from 'react';
import styled from 'styled-components';

import { CardContainer, Username, Details, Result, ButtonContainer, Button } from './StyledPlayerCard';

const PlayerCard = ({ player }) => {
  return (
    <CardContainer>
      <Username>{player.username}</Username>
      <Details>Base Income: <Result>{player.baseIncome}</Result> </Details>
      <Details>Company Income: <Result>{player.companyIncome}</Result> </Details>
      <Details>Total Income: <Result>{player.totalIncome}</Result> </Details>
      <Details>In-Game Tokens: <Result>{player.inGameTokens}</Result> </Details>
      <ButtonContainer>
        <Button>SEE MORE</Button>
      </ButtonContainer>
      
    </CardContainer>
  );
};

export default PlayerCard;
