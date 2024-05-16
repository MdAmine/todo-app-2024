import {beforeEach, describe, expect, it, vi} from "vitest";
import {render} from "@testing-library/react";
import App from "./App.tsx";
import userEvent from "@testing-library/user-event";
import {AuthContext} from "./context/AuthContextProvider.tsx";

describe('App test', () => {
  const setLoggedIn = vi.fn()
  const setLoggedOut = vi.fn()

  const renderComponent = (isLoggedIn: boolean) => render(
    <AuthContext.Provider value={{isLoggedIn, setLoggedIn, setLoggedOut}}>
      <App/>
    </AuthContext.Provider>
  )

  beforeEach(() => {
    vi.clearAllMocks()
    localStorage.clear()
  })

  it('should render only login form when user is not logged in', () => {
    const rendered = renderComponent(false)

    expect(rendered.getByLabelText('login-form')).toBeInTheDocument()
    expect(rendered.queryByLabelText('todos-list')).toBeNull()
  })

  it('should render todo list when user is logged in', () => {
    localStorage.setItem('isLoggedIn', 'true')
    const rendered = renderComponent(true)

    expect(rendered.getByLabelText('todos-list')).toBeInTheDocument()
    expect(rendered.queryByLabelText('login-form')).toBeNull()
  })

  it('should trigger logged in when user click login', async () => {
    const rendered = renderComponent(false)

    const emailInput = rendered.getByLabelText('email-input')
    const passwordInput = rendered.getByLabelText('password-input')
    const loginBtn = rendered.getByLabelText('login-btn')
    const user = userEvent.setup()

    await user.type(emailInput, 'test@test')
    await user.type(passwordInput, '123')
    await user.click(loginBtn)

    expect(setLoggedIn).toHaveBeenCalledOnce()
  })
})