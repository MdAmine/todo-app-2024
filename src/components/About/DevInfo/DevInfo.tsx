import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
function DevInfo({ setIsLoggedIn }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const handleReturn = () => {
    navigate("/");
  };
  useEffect(() => {
    fetchUserInfo();
  }, []);

  async function fetchUserInfo() {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://api.github.com/users/oumaimaelmardi"
      );

      if (!response.ok) {
        throw new Error("Error fetching user data");
      }

      const data = await response.json();
      setUser(data);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }

  let content = <p>Loading...</p>;

  if (error) {
    content = <h3>Error: {error}</h3>;
  } else if (!isLoading && user) {
    content = (
      <div className="container">
        <header className="text-center text-light my-4">
          <h1>Developer Info</h1>
        </header>
        <div className="row">
          <div className="col-md-4">
            <img
              src={user.avatar_url}
              className="img-fluid"
              alt="User Avatar"
            />
          </div>
          <div className="col-md-8  text-light">
            <h3>ID: {user.id}</h3>
            <p>Name: {user.name}</p>
            <p>Login: {user.login}</p>
            <p>Followers: {user.followers}</p>
            <p>Following: {user.following}</p>
            <p>Public Repos: {user.public_repos}</p>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {content}{" "}
      <button className="btn btn-primary" onClick={handleReturn}>
        Back
      </button>{" "}
    </div>
  );
}

export default DevInfo;
