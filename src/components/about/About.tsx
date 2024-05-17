import {useNavigate} from "react-router-dom";
import DeveloperInfo from "./DeveloperInfo.tsx";
const About = () => {
    const navigate = useNavigate()
    const handleBack = () => navigate(-1);
    return (
        <>
            <div className="about d-flex align-items-center justify-content-center">
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">About</h2>
                        <br/>
                        <p>A simple Todo-List Application using React 18.2.</p>
                        <p>This project was bootstrapped with Vite.</p>
                        <p>Some styles (html/css) are retrieved from:</p>
                        <ul>
                            <li><a href="https://codepen.io/MarianKoniuszko/pen/g00JmaG" target="_blank" rel="noopener noreferrer">https://codepen.io/MarianKoniuszko/pen/g00JmaG</a></li>
                            <li><a href="https://codepen.io/seshatan/pen/pRpmWG" target="_blank" rel="noopener noreferrer">https://codepen.io/seshatan/pen/pRpmWG</a></li>
                        </ul>
                        <br/>
                        <hr className="custom-hr" />
                        <br/>
                        <DeveloperInfo />
                        <br/>
                        <button className="btn btn-dark" onClick={handleBack}>back</button>
                    </div>
                </div>
            </div>
        </>
    );
}
export default About;