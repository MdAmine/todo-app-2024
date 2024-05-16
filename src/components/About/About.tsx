import DeveloperInfo from "../DeveloperInfo/DeveloperInfo.tsx";
import {useNavigate} from "react-router-dom";

function About() {
  const navigate = useNavigate()

  return (<div className='container text-white'>
    <h1 className='text-center mb-5'>About</h1>
    <p>
      This is app is built using react
    </p>
    <hr/>
    <DeveloperInfo/>
    <hr/>
    <button className='btn btn-secondary mt' onClick={() => navigate(-1)}>Back</button>
  </div>)
}

export default About