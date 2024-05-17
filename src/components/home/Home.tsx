import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-light">
      <h1 className="text-center mt-5">Welcome to the Todo App!</h1>
      <p className="text-center">
        This Todo App allows you to easily manage your tasks and stay organized.
        Create, update, and delete todos with just a few clicks. Stay on top of
        your priorities and never miss a deadline again!
      </p>
      <Link to="/todos" className="btn btn-primary d-block mx-auto mt-3">
        Go to Todos
      </Link>
    </div>
  );
};

export default Home;
