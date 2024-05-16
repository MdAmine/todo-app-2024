import DevInfo from "./DevInfo/DevInfo";

function About() {
  return (
    <div className="container">
      <header className="text-center text-light my-4">
        <h1 className="mb-5">About</h1>
        <p>A simple Todo-List Application using React 18.2.</p>
        <p>This project was bootstrapped with [Vite](https://vitejs.dev/).</p>
        <p>Some styles (html/css) are retrieved from :</p>
        <ul>
          <li>https://codepen.io/MarianKoniuszko/pen/gOoJmaG</li>
          <li>https://codepen.io/sashatran/pen/pRpmWG</li>
        </ul>
      </header>

      <DevInfo />
    </div>
  );
}
export default About;
