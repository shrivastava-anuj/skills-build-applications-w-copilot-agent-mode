import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Teams API endpoint:', API_URL);
        console.log('Fetched teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err));
  }, []);

  return (
    <div className="container mt-4">
      <h2>Teams</h2>
      <ul className="list-group">
        {teams.map((team, idx) => (
          <li className="list-group-item" key={team.id || idx}>
            {JSON.stringify(team)}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Teams;
