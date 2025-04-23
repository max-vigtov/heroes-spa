import { types } from "../types/types";

interface AuthAction {
    type: string;
    payload?: User;
}

export interface User {
    id: string;
    name: string;
}

export interface AuthState {
    logged: boolean;
    user?: User;
}

export const authReducer = (state: AuthState, action: AuthAction) => {

	switch ( action.type ) {
		case types.login:
			return {
				...state,
				logged: true,
				user: action.payload
			}

		case types.logout:
			return {
				logged: false,
				user: undefined
			}

		default:
			return state
	}

};