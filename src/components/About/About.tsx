import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../../App.css';
import { Link } from 'react-router-dom';

function About() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/loubnalazgham')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="container text-center text-light my-4">
        <h1 className="mb-0">About</h1>
        <p>Bienvenue sur <strong>Todo-Liste</strong> !</p>
        <p>Nous sommes une équipe passionnée qui vise à fournir les meilleures ressources et informations dans le domaine de <strong>Todo-Liste</strong>.</p>
        <h3>Notre Mission</h3>
        <p>Notre mission est d'éduquer, d'inspirer et d'impliquer nos lecteurs à travers des contenus informatifs, divertissants et pertinents sur <strong>Todo-Liste</strong>.</p>
        <div>
          <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="btn btn-primary me-2">React Documentation</a>
          <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer" className="btn btn-success me-2 mt-2">Stack Overflow</a>
          <a href="https://www.w3schools.com/REACT/DEFAULT.ASP" target="_blank" rel="noopener noreferrer" className="btn btn-danger me-2 mt-2">W3Schools React</a>
          <a href="https://github.com/MdAmine/react-example-2024" target="_blank" rel="noopener noreferrer" className="btn btn-dark me-2 mt-2">Github Repository</a>
        </div>
      </div>
      <hr className="text-white" />
      <div className="container text-center text-light my-4">
        <h1 className="mb-5">Informations</h1>
        {userData && (
          <div>
            <p>Contactez-nous :</p>
            <p>{`Name: ${userData.name}`}</p>
            <p>{`Login: ${userData.login}`}</p>
            <p>{`Repos: ${userData.repos_url}`}</p>
            <p>{`Organizations: ${userData.organizations_url}`}</p>
            <p>{`Public Repos: ${userData.public_repos}`}</p>
            <p>{`Created at: ${userData.created_at}`}</p>
            <p>{`Updated at: ${userData.updated_at}`}</p>
            <img
              src={userData.avatar_url}
              alt="GitHub Avatar"
              style={{ width: 100, height: 'auto', marginRight: 20 }}
            />
            <div className="mt-3">
              <Link to="/">
                <button className="btn btn-dark">Retour</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
