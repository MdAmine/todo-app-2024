import React from "react";

interface AboutProps {
  handleLogout: () => void;
}
const About: React.FC<AboutProps> = ({ handleLogout }) => {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center" }}>About</h1>
      <p style={{ color: "white" }}>
        Ceci est une ligne en blanc.Ceci est une ligne en blanc.
      </p>
      <p style={{ color: "white" }}>
        Voici une autre ligne en blanc.Voici une autre ligne en blanc.
      </p>
      <p style={{ color: "white" }}>
        Et une troisième ligne en blancVoici une autre ligne en blanc..
      </p>

      <ul style={{ color: "blue" }}>
        <li>
          <a href="lien1">http://localhost:5173/</a>
        </li>
        <li>
          <a href="lien2">http://localhost:5173/</a>
        </li>
      </ul>
    </div>
  );
};

export default About;
