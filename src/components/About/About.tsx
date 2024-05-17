import React, { useState, useEffect } from "react";
import axios from "axios"; // Importez Axios
import { Link } from "react-router-dom";

interface AboutProps {
  handleLogout: () => void;
}

const About: React.FC<AboutProps> = ({ handleLogout }) => {
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const userResponse = await axios.get(
          "https://api.github.com/users/NAZIKSAFI123"
        );
        setUser(userResponse.data);
        const reposResponse = await axios.get(
          "https://api.github.com/users/NAZIKSAFI123/repos"
        );
        setRepos(reposResponse.data);
      } catch (error) {
        console.error("Error fetching GitHub data:", error);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div>
      <div>
        <h1 style={{ color: "white", textAlign: "center" }}>About</h1>
        <p style={{ color: "white" }}>
          Ceci est une ligne en blanc. Ceci est une ligne en blanc.
        </p>
        <p style={{ color: "white" }}>
          Voici une autre ligne en blanc. Voici une autre ligne en blanc.
        </p>
        <p style={{ color: "white" }}>
          Et une troisième ligne en blanc. Voici une autre ligne en blanc.
        </p>

        <ul style={{ color: "blue" }}>
          <li>
            <a href="http://localhost:5173/page1">Lien vers la page 1</a>
          </li>
          <li>
            <a href="http://localhost:5173/page2">Lien vers la page 2</a>
          </li>
        </ul>
      </div>
      <hr className="border-top" />
      <div>
        {user && (
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={user.avatar_url}
              alt="GitHub Avatar"
              style={{ width: 100, height: "auto", marginRight: 20 }}
            />
            <div>
              <h6 style={{ color: "white", textAlign: "center" }}>
                GitHub Profile for {user.login}
              </h6>
              <ul>
                {repos.map((repo: any) => (
                  <li key={repo.id}>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <Link to={"/"}>
          <button onClick={handleLogout} className="btn btn-dark">
            Logout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
