import React, { useState, useEffect } from 'react';
import FloatingButton from '../UI/FloatingButton';

const DeveloperInfo = () => {
  const [developerInfo, setDeveloperInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDeveloperInfo();
  }, []);

  async function fetchDeveloperInfo() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://api.github.com/users/Marouane-sebti');

      if (!response.ok) throw Error("Error..");

      const data = await response.json();

      setDeveloperInfo(data);
    } catch (error) {
      setError("Error");
    }

    setIsLoading(false);
  }

  let content = <p>Loading...</p>;

  if (error) content = <p>Error!</p>;

  if (!isLoading && developerInfo) {
    content = (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', color: 'white' }}>
        <img src={developerInfo.avatar_url} alt="avatar" style={{ width: '100px', borderRadius: '50%', marginRight: '20px' }} />
        <div>
          <h1>Developer Info</h1>
          <p>ID : {developerInfo.id}</p>
          <p>Username :{developerInfo.login}</p>
          <button style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Logout</button>
        </div>
      </div>
    );
  }

  return <>{content}</>;
};

export default DeveloperInfo;