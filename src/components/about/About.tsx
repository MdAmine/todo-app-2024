import {DeveloperInfo} from "../DeveloperInfo.tsx";

const About = () => {
    return (<div className='container text-white'>
        <h1 className='text-center mb-5'>About</h1>
        <p>
            Todo App built with React, TypeScript.
        </p>
        <hr/>
        <DeveloperInfo/>
    </div>)
}

export default About