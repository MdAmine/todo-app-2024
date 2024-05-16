import React, {useState} from "react";

export const AuthContext = React.createContext({});

const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(true);

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{loggedIn, setLoggedIn, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;