import FetchApi from "../fetchApi/fetchApi.tsx";

const About = () => {
    return (
        <div className="text-light">
            <h1>About</h1>
            <p>This is the about page.</p>
            <p>Here is some more information about this page.</p>
            <p>And even more information can go here.</p>
            <FetchApi/>
        </div>
    );
};

export default About;
