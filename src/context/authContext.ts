import {createContext} from "react";
import {AuthContextProps} from "../types/authContextProps.ts";

export const AuthContext = createContext<AuthContextProps | null>(null);