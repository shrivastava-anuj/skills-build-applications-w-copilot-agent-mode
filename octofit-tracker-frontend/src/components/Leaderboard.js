import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboard/`;

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaders(results);
        console.log('Leaderboard API endpoint:', API_URL);
        console.log('Fetched leaderboard:', results);
      })
      .catch(err => console.error('Error fetching leaderboard:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Leaderboard</h2>
      <ul className="list-group">
        {leaders.map((leader, idx) => (
          <li className="list-group-item" key={leader.id || idx}>
            {JSON.stringify(leader)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Leaderboard;
