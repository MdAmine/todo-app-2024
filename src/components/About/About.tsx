import React from 'react';
import FetchedData from './fetchedData';

const About = () => {
  return (
    <><div>
          <h2>About</h2>
          <p>Here are some useful resources for learning React:</p>
          <ul>
              <li>
                  <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noopener noreferrer">React Official Documentation</a>
              </li>
              <li>
                  <a href="https://reactrouter.com/web/guides/quick-start" target="_blank" rel="noopener noreferrer">React Router Documentation</a>
              </li>
              <li>
                  <a href="https://redux.js.org/introduction/getting-started" target="_blank" rel="noopener noreferrer">Redux Documentation</a>
              </li>
          </ul>
      </div><FetchedData username={"latifaAb"}></FetchedData></>
  );
};

export default About;
