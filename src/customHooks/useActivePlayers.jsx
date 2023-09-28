import { useState, useEffect } from 'react';

const useActivePlayers = () => {
  const [activePlayers, setActivePlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchActivePlayers = async () => {
      try {
        const response = await fetch('http://localhost:3004/api/v1/admin/players/active', {
          method: 'GET',
          credentials: 'include',
        });

        if (!response.ok) {
          throw new Error('Failed to fetch active players');
        }

        const activePlayers = await response.json();
        setActivePlayers(activePlayers);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchActivePlayers();
  }, []);

  return { activePlayers, loading, error };
};

export default useActivePlayers;
