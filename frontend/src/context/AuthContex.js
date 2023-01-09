import { useState, createContext } from "react";

//#TODO: copie el cuerpo, queda codearlo;

//Create context
const AuthContext = createContext();
//Create provider
const initialAuth = null;
const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialAuth);

	const handleAuth = (auth) => {
		if (auth) {
			setAuth(null);
		} else {
			setAuth(true);
		}
	};

	const logOff = (auth) => {
		if (auth) {
			setAuth(null);
			console.log("auth to null bc sign out");
		}
	};

	const data = { auth, handleAuth, logOff };

	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
