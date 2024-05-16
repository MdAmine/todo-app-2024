import FetchApi from "../fetchApi/fetchApi.tsx";

const About = (props) => {
    return (
        <div className="text-light">
            <h1>About</h1>
            <p>This is the about page.</p>
            <p>Here is some more information about this page.</p>
            <p>And even more information can go here.</p>
            <FetchApi logout={props.logout}/>
        </div>
    );
};

export default About;
