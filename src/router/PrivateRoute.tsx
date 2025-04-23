import { useContext, useMemo } from "react";
import { AuthContext } from "../auth";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {

	const { authState } = useContext(AuthContext);
	const { logged } = authState;
	const { pathname, search } = useLocation();

	useMemo(() => {
		const path = pathname + search;
		localStorage.setItem('lastPath', path);
	}, [pathname, search]);

  return ( logged ) 
  	? children 
  	: <Navigate to="/login" />
}