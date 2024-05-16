import {FormEvent, useContext, useRef, useState} from "react";
import {AuthContext} from "../../routes/RouterOutlet.tsx";

function LoginForm() {
  const emailInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState<string | null>(null)
  const {setLoggedIn} = useContext(AuthContext)!

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (emailInput.current!.value.length > 0 && passwordInput.current!.value.length > 0) {
      setLoggedIn()
    } else {
      setError('Form invalid')
    }
  }

  return (<div className='container'>
    <form className="text-center my-4 text-light" onSubmit={handleSubmit} aria-label='login-form'>
      <h1 className="mb-4">Login Form</h1>
      <input
        ref={emailInput}
        type="email"
        className={`form-control mb-2`}
        id="email"
        placeholder="Email"
        aria-label='email-input'
      />
      <input
        ref={passwordInput}
        type="password"
        className={`form-control mb-3`}
        id="password"
        placeholder="Enter your Password"
        aria-label='password-input'
      />
      {error && (<div className='mb-2' style={{color: 'red'}}>{error}</div>)}
      <button type="submit" className="btn btn-dark" aria-label='login-btn'>
        Login
      </button>
    </form>
  </div>)
}

export default LoginForm