import React from 'react';
import styled from 'styled-components';
import StateCard from './StateCard';
import useStates from '../../customHooks/useStates';

const StatesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
`;

const StatesPage = () => {
  const { states, loading, error } = useStates();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <StatesContainer>
      {states.map(state => (
        <StateCard key={state._id} state={state} />
      ))}
    </StatesContainer>
  );
};

export default StatesPage;
