export interface Todo {
  id: number
  name: string
  completed: boolean
  priority: Priority
}

export enum Priority {
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
}

export interface AuthContextProps {
  isLoggedIn: boolean,
  setLoggedIn: () => void,
  setLoggedOut: () => void,
}

export interface GithubUser {
  avatarUrl: string,
  bio: string,
  login: string,
  name: string,
  htmlUrl: string,
}