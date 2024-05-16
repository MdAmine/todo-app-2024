import React, {useState, useEffect} from "react";
import "./About.css";
import {useAuth} from "../AuthContext/AuthContext";
import {useNavigate} from "react-router-dom";


const About: React.FC = () => {
    const {user} = useAuth();
    const [githubData, setGithubData] = useState<any>(null);
    const navigate = useNavigate();

    const handleReturnToPreviousPage = () => {
        navigate(-1);
    }


    useEffect(() => {
        const fetchGithubData = async () => {
            try {
                const response = await fetch("https://api.github.com/users/goldenadnane");
                const data = await response.json();
                setGithubData(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données GitHub :", error);
            }
        };
        fetchGithubData();
    }, []);

    return (
        <div>
            <h1>About</h1>
            <p>User: {user}</p>
            {githubData && (
                <div className="card">
                    <div className="card-body">
                        <img src={githubData.avatar_url} alt="Avatar" height={100} width={100}/>
                    </div>
                    <h2>Informations</h2>
                    <h2>GitHub Profile</h2>
                    <p>Username: {githubData.login}</p>
                    <p>Nombre de repos: {githubData.public_repos}</p>
                    <p>Followers: {githubData.followers}</p>
                    <p>Following: {githubData.following}</p>
                    <p>URL: <a href={githubData.html_url} target="_blank"
                               rel="noopener noreferrer">{githubData.html_url}</a></p>
                </div>
            )}
            <div className={"mt-3"}>
                <button className="btn btn-primary" onClick={handleReturnToPreviousPage}>Return to previous page
                </button>
            </div>
        </div>
    );
};

export default About;
