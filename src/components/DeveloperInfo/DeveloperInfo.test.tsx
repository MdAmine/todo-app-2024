import {beforeEach, describe, expect, it, vi} from "vitest";
import {render, waitFor} from "@testing-library/react";
import DeveloperInfo from "./DeveloperInfo.tsx";
import {GithubUser} from "../../types";
import {BrowserRouter} from "react-router-dom";
import {AuthContext} from "../../context/AuthContextProvider.tsx";

describe('Developer info test', () => {
  const user: GithubUser = {
    login: 'login',
    name: 'name',
    htmlUrl: 'html_url',
    bio: 'bio',
    avatarUrl: 'avatar_url'
  }
  const setLoggedIn = vi.fn()
  const setLoggedOut = vi.fn()

  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('should show developer info', async () => {
    vi.spyOn(window, 'fetch').mockImplementation(() => {
      return Promise.resolve({
        json: () => Promise.resolve({
          login: user.login,
          name: user.name,
          html_url: user.htmlUrl,
          bio: user.bio,
          avatar_url: user.avatarUrl
        }),
      } as Response)
    })

    const rendered = render(
      <AuthContext.Provider value={{isLoggedIn: true, setLoggedIn, setLoggedOut}}>
        <BrowserRouter>
          <DeveloperInfo/>
        </BrowserRouter>
      </AuthContext.Provider>
    )

    await waitFor(() =>
      expect(rendered.getByLabelText('user-avatar-url'))
        .toHaveAttribute('src', user.avatarUrl)
    )
    await waitFor(() =>
      expect(rendered.getByLabelText('user-login-name'))
        .toHaveTextContent(`${user.login} / ${user.name}`)
    )
    await waitFor(() =>
      expect(rendered.getByLabelText('user-bio'))
        .toHaveTextContent(user.bio)
    )
    await waitFor(() =>
      expect(rendered.getByLabelText('user-profile'))
        .toHaveAttribute('href', user.htmlUrl)
    )
  })
})