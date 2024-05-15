import {useContext, useEffect, useState} from "react";
import {GithubUser} from "../../types";
import {AuthContext} from "../../routes/RouterOutlet.tsx";
import {useNavigate} from "react-router-dom";

function DeveloperInfo() {
  const [user, setUser] = useState<GithubUser | null>(null)
  const {setLoggedOut} = useContext(AuthContext)!;
  const navigate = useNavigate()

  useEffect(() => {
    fetchGithubInfo()
  }, []);

  const fetchGithubInfo = async () => {
    const response = await fetch('https://api.github.com/users/voidnowhere')
    const data = await response.json()
    setUser({
      login: data.login,
      name: data.name,
      htmlUrl: data.html_url,
      bio: data.bio,
      avatarUrl: data.avatar_url
    })
  }

  const logout = () => {
    setLoggedOut()
    navigate('/')
  }

  if (!user) {
    return null
  }

  return (
    <div className='container d-flex gap-3'>
      <img src={user.avatarUrl} alt='Avatar' width={150}/>
      <div>
        <p>{user.login} / {user.name}</p>
        <p>{user.bio}</p>
        <p>
          <a href={user.htmlUrl} target='_blank'>Profile</a>
        </p>
        <button className='btn btn-secondary' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default DeveloperInfo