import { createContext } from "react";
import { AuthState } from "./authReducer";

interface AuthContextProps {
    authState: AuthState;
    login: (name: string) => void;
	logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);