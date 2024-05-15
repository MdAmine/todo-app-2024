import DeveloperInfo from "../DeveloperInfo/DeveloperInfo.tsx";

function About() {
  return (<div className='container text-white'>
    <h1 className='text-center mb-5'>About</h1>
    <p>
      This is app is built using react
    </p>
    <hr/>
    <DeveloperInfo/>
  </div>)
}

export default About