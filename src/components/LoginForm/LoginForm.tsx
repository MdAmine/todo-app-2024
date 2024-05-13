import {FormEvent} from "react";

function LoginForm({onLogin}: { onLogin: () => void }) {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    localStorage.setItem('isLoggedIn', 'true')
    onLogin()
  }

  return (<>
    <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
      <h1 className="mb-4">Login Form</h1>
      <input
        type="text"
        className={`form-control mb-2`}
        id="email"
        placeholder="Email"
        required
      />
      <input
        type="password"
        className={`form-control mb-3`}
        id="password"
        placeholder="Enter your Password"
        required
      />
      <button type="submit" className="btn btn-dark">
        Login
      </button>
    </form>
  </>)
}

export default LoginForm