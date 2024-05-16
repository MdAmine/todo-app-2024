export interface AuthContextProps {
    isLoggedIn: boolean,
    loginHandler: () => void,
    logoutHandler: () => void,
}