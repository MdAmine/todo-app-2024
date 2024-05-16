import { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../../App.css";
import { Link } from "react-router-dom";

function About() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch('https://api.github.com/users/loubnalazgham')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
   
     <div className="container text-center text-light my-4">        
          <h1 className="mt-5">About</h1>
          <p>
            Bienvenue sur <strong> Todo-Liste </strong> !
          </p>
          <p>
            Nous sommes une équipe passionnée qui vise à fournir les meilleures ressources et informations dans le domaine de <strong>Todo-Liste</strong>. 
          </p>
          
          <h3>Notre Mission</h3>
          <p>
            Notre mission est d'éduquer, d'inspirer et d'impliquer nos lecteurs à travers des contenus informatifs, divertissants et pertinents sur
             <strong>Todo-Liste</strong>
          </p>
       

     </div>
      <div className="container">
        <header className="text-center text-light my-4">
          <h1 className="mb-5">Informations</h1>
        </header>
        {userData && (
          <div className="text-center text-light my-4">
            <p>Contact Us:</p>
            <p>{`Name: ${userData.name}`}</p>
            <p>{`login: ${userData.login}`}</p>
            <p>{`repos: ${userData.repos_url}`}</p>
            <p>{`organizations: ${userData.organizations_url}`}</p>
            <p>{`Public Repos: ${userData.public_repos}`}</p>
            <p>{`created_at: ${userData.created_at}`}</p>
            <p>{`updated_at: ${userData.updated_at}`}</p>
            <br/>
            <div className="mt-3">
                        <Link to="/todolist">
                            <button className="btn btn-dark">Retour</button>
                        </Link>
                    </div>
          </div>
          
        )}

       
        
      </div>
    </>
  );
}

export default About;
