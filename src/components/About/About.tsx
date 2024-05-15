import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const About = () => {

    const [login, setLogin] = useState();
    const [id, setId] = useState();
    const [avatar_url, setAvatar_url] = useState();
    const [html_url, setHtml_url] = useState();


    useEffect(() => {
        fetchRepoInfos();
    }, []);


    function fetchRepoInfos() {
        fetch("https://api.github.com/users/OmarBoukioud")
            .then((response) => response.json())
            .then((data) => {
                console.log("data id = " + data.avatar_url);
                setLogin(data.login);
                setId(data.id);
                setAvatar_url(data.avatar_url);
                setHtml_url(data.html_url);
            });
    }

    return (


        <>
        <div className="card d-flex justify-content-center align-items-center" style={{width: '18rem'}}>
                <img src={avatar_url} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Username : {login}</h5>
                        <p className="card-text">ID : {id}</p>
                        <a href={html_url}  className="btn btn-primary ">{html_url}</a>
                    </div>
                    <Link to={`/`} className="btn btn-dark text-light m-1"> Back </Link>
            </div>
        </>

    );
};

export default About; 