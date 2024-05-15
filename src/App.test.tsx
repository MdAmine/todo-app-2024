import {beforeEach, describe, expect, it, vi} from "vitest";
import {render} from "@testing-library/react";
import App from "./App.tsx";
import {AuthContext} from "./routes/RouterOutlet.tsx";

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
})