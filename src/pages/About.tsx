import { useEffect, useState } from "react";
import FloatingButton from "../components/UI/FloatingButton";
import DevInfo from "../components/DevInfo/DevInfo";

export default function About({onLogout}) {
    const githubUrl = 'https://api.github.com/users/ELBOUROUMIABDELKARIM';
    const [user, setUser] = useState(null);

    useEffect(()=>{
        fetchGithub();
    }, [])


     const fetchGithub = async () => {
        const response = await fetch(githubUrl);
        const data = await response.json();
        const {name, avatar_url , html_url, bio} = data;
        setUser({name, avatar_url , html_url, bio});
    }

    return (
        <>
            <FloatingButton onLogout={onLogout} />
            <div className="about d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">About</h2>
                        <br/>
                        <p>A simple Todo-List Application using React 18.2.</p>
                        <p>This project was bootstrapped with Vite.</p>
                        <p>Some styles (html/css) are retrieved from:</p>
                        <ul>
                            <li><a href="https://codepen.io/MarianKoniuszko/pen/g00JmaG" target="_blank" rel="noopener noreferrer">Codepen by Marian Koniuszko</a></li>
                            <li><a href="https://codepen.io/seshatan/pen/pRpmWG" target="_blank" rel="noopener noreferrer">Codepen by Seshatan</a></li>
                        </ul>
                        <br/>
                        <hr className="custom-hr" />
                        <br/>
                        <DevInfo user={user} onLogout={onLogout} />
                    </div>
                </div>
            </div>
        </>
    );
}
