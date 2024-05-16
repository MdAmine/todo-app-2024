import { useState, useEffect } from 'react';
import { fetchGithubInfos } from '../services/api.github';

const useGithubUser = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      const data = await fetchGithubInfos();
      setUser(data);
    };
    getUserInfo();
  }, []);

  return user;
};

export default useGithubUser;
