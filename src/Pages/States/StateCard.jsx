import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CardContainer = styled.div`
    border: 3px solid #3E3E3E;
    font-family: Afogand;
    letter-spacing: 2px;
    border-radius: 15px;
    background-color: #121212;
    margin: 10px;
    padding: 20px;
    height: 3s00px;
`;

const StateName = styled.h2`
  font-size: 35px;
`;

const Taxes = styled.p`
  font-family: Inter;
`;

const SeeMoreButton = styled(NavLink)`
    display: block;
    margin: 0 auto;
    margin-top: 40px;
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
`;

const StateCard = ({ state }) => {


  return (
    <CardContainer>
      <StateName>{state.name}</StateName>
      <Taxes>Taxes: {state.taxes}%</Taxes>
      <SeeMoreButton to={`/states/${state._id}`}>See More</SeeMoreButton>
    </CardContainer>
  );
};

export default StateCard;
