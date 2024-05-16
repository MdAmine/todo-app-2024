import React, {useState} from "react";

export const AuthContext = React.createContext(null);

const AuthProvider = ({children}) => {
    const [loggedIn, setLoggedIn] = useState(true);

    const logout = () => {
        setLoggedIn(false);
    };

    return (
        <AuthContext.Provider value={{loggedIn, logout}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;