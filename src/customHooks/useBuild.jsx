const useBuild = async (playerId, companyId, stateId) => {
    try {
      const response = await fetch(`http://localhost:3004/api/v1/admin/players/${playerId}/economic-activities/build`, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          companyId: companyId,
          stateId: stateId,
        }),
      });
  
      // ... (rest of the code remains unchanged)
    } catch (error) {
      console.error('Error building company:', error);
    }
  };

export default useBuild;
