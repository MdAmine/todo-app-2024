import { useEffect, useState } from "react";

const About = () => {
  return (
    <div className="text-light">
      <h1>About</h1>
      <p className="text-light ">
        This is an application for Todo tasks, built using Vite and React. It
        allows you to manage your tasks and stay organized.
      </p>
      <hr />
      <DeveloperInfo />
    </div>
  );
};

const DeveloperInfo = () => {
  const username = "abdellah-belcaid";
  const [developer, setDeveloper] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setDeveloper(data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [username]);

  return (
    <div className="developer-info d-flex gap-4 align-items-center text-light">
      {developer && (
        <>
          <img
            src={developer.avatar_url}
            alt="User Avatar"
            className="img-thumbnail mr-3"
            style={{ maxWidth: "100px" }}
          />
          <div>
            <h2 className="font-weight-light">{developer.name}</h2>
            <p className="text-muted">{developer.bio}</p>
            <p>
              <span className="font-weight-bold">Followers:</span>{" "}
              {developer.followers}
            </p>
            <p>
              <span className="font-weight-bold">Following:</span>{" "}
              {developer.following}
            </p>
            <p>
              <span className="font-weight-bold">Public Repos:</span>{" "}
              {developer.public_repos}
            </p>
            <p>
              <span className="font-weight-bold">Location:</span>{" "}
              {developer.location}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default About;
