import {FormEvent, useRef, useState} from "react";

function LoginForm({onLogin}: { onLogin: () => void }) {
  const emailInput = useRef<HTMLInputElement | null>(null)
  const passwordInput = useRef<HTMLInputElement | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (emailInput.current!.value.length > 0 && passwordInput.current!.value.length > 0) {
      localStorage.setItem('isLoggedIn', 'true')
      onLogin()
    } else {
      setError('Form invalid')
    }
  }

  return (<>
    <form className="text-center my-4 text-light" onSubmit={handleSubmit}>
      <h1 className="mb-4">Login Form</h1>
      <input
        ref={emailInput}
        type="email"
        className={`form-control mb-2`}
        id="email"
        placeholder="Email"
      />
      <input
        ref={passwordInput}
        type="password"
        className={`form-control mb-3`}
        id="password"
        placeholder="Enter your Password"
      />
      {error && (<div className='mb-2' style={{color: 'red'}}>{error}</div>)}
      <button type="submit" className="btn btn-dark">
        Login
      </button>
    </form>
  </>)
}

export default LoginForm