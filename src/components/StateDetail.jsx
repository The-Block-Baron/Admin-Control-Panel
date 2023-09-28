import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';

const DetailContainer = styled.div`
  // Your styles here
`;

const StateName = styled.h2`
  // Your styles here
`;

// Define more styled components for other details

const StateDetail = () => {
  const { id } = useParams();
  const [stateDetail, setStateDetail] = useState(null);

  useEffect(() => {
    const fetchStateDetail = async () => {
      try {
        const response = await fetch(`http://localhost:3004/api/v1/admin/states/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch state detail');
        }
        const detail = await response.json();
        setStateDetail(detail);
      } catch (error) {
        console.error('Error fetching state detail:', error);
      }
    };

    fetchStateDetail();
  }, [id]);

  if (!stateDetail) return <p>Loading...</p>;

  return (
    <DetailContainer>
      <StateName>{stateDetail.name}</StateName>
      {/* Render other details here */}
    </DetailContainer>
  );
};

export default StateDetail;
