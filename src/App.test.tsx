import {beforeEach, describe, expect, it} from "vitest";
import {render} from "@testing-library/react";
import App from "./App.tsx";
import userEvent from "@testing-library/user-event";

describe('App test', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  it('should render only login form when user is not logged in', () => {
    const rendered = render(<App/>)

    expect(rendered.getByLabelText('login-form')).toBeInTheDocument()
    expect(rendered.queryByLabelText('todos-list')).toBeNull()
  })

  it('should render todo list when user is logged in', () => {
    localStorage.setItem('isLoggedIn', 'true')
    const rendered = render(<App/>)

    expect(rendered.getByLabelText('todos-list')).toBeInTheDocument()
    expect(rendered.queryByLabelText('login-form')).toBeNull()
  })

  it('should render login when user click logout', async () => {
    localStorage.setItem('isLoggedIn', 'true')
    const rendered = render(<App/>)

    const logoutBtn = rendered.getByLabelText('logout-btn')
    const user = userEvent.setup()

    await user.click(logoutBtn)
    expect(rendered.getByLabelText('login-form')).toBeInTheDocument()
    expect(rendered.queryByLabelText('todos-list')).toBeNull()
  })
})