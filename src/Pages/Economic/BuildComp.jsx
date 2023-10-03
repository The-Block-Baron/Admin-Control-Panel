import React, { useState } from 'react';
import styled from 'styled-components';
import useStates from '../../customHooks/useStates';


const BuildContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StateCard = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const StateName = styled.h3`
  margin: 0;
  font-size: 1.2rem;
`;

const StateDescription = styled.p`
  margin: 0;
  font-size: 1rem;
`;

const CompanyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
`;

const CompanyCard = styled.div`
  border: 3px solid #3E3E3E;
  font-family: Afogand;
  letter-spacing: 2px;
  font-size: 20px;
  text-align: center;
  border-radius: 15px;
  background-color: #121212;
  padding: 20px;
  flex: 1 0 calc(33.333% - 10px);
  box-sizing: border-box;
  color: #FFFFFF;
`;

const Button = styled.button` 
  /* ... (rest of your button styles) */
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${props => props.isOpen ? 'block' : 'none'};
  z-index: 1000;
`;

const ModalContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #121212;
  padding: 20px;
  border-radius: 15px;
  z-index: 1001;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
`;



const BuildComp = () => {
  const { states, loading, error } = useStates();
  const [selectedState, setSelectedState] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleStateClick = (state) => {
    if (selectedState && selectedState._id === state._id) {
      setSelectedState(null);
    } else {
      setSelectedState(state);
    }
  };

  const handleCompanyBuild = (company) => {
    setSelectedCompany(company);
    setModalOpen(true);
  };

  return (
    <BuildContainer>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        states.map((state) => (
          <StateCard key={state._id} onClick={() => handleStateClick(state)}>
            <StateName>{state.name}</StateName>
            <StateDescription>{state.description}</StateDescription>
          </StateCard>
        ))
      )}
      {selectedState && (
        <CompanyList>
          {selectedState.availableCompanies.map((company) => (
            <CompanyCard key={company._id}>
              <h4>{company.type}</h4>
              <Button onClick={() => handleCompanyBuild(company)}>Build</Button>
            </CompanyCard>
          ))}
        </CompanyList>
      )}

      <ModalOverlay isOpen={isModalOpen}>
        <ModalContent>
          <CloseButton onClick={() => setModalOpen(false)}>X</CloseButton>
          <p>Modal Content Here</p>
        </ModalContent>
      </ModalOverlay>
    </BuildContainer>
  );
};

export default BuildComp