import { createContext, useEffect, useState } from "react";

import { useCookies } from "react-cookie";

//#TODO: copie el cuerpo, queda codearlo;

//Create context
const AuthContext = createContext();
//Create provider

const AuthProvider = ({ children }) => {
  //First declare jwt token in cookie store
  const [cookies, setCookie, removeCookie] = useCookies([
    "ajt",
    "AccType",
    "accId",
    "name",
    "email",
  ]);
  // cookies.NAMEOFCOOKIE =>
  //if cookies does not exist === undefined;
  //if cookies exists, gets the value

  //States
  const [authT, setAuthT] = useState(null);
  const [accInfo, setAccInfo] = useState({});

  //First render, checks if user is already logged
  useEffect(() => {
    //Cookies dont no exist
    if (
      !cookies.ajt ||
      !cookies.AccType ||
      !cookies.accId ||
      !cookies.name ||
      !cookies.email
    ) {
      setAuthT(false);
      setAccInfo(null);
    }
    //cookies exists
    if (
      cookies.ajt &&
      cookies.AccType &&
      cookies.accId &&
      cookies.name &&
      cookies.email
    ) {
      setAuthT(true);
      let data = {
        ajt: cookies.ajt,
        accType: cookies.AccType,
        accId: Number(cookies.accId),
        name: cookies.name,
        email: cookies.email,
      };
      setAccInfo(data);
    }
  }, [cookies]);

  //Function to log in and save info to cookies
  const logInAddCookies = (data) => {
    /* 
		//data should be:
		data = {
			ajt: "eyasdasdasdsa",
			accType: "User" / "Store",
			name: "Wido",
			email: "wido@gmail.com"
		}
		*/
    //First: add cookies:
    setCookie("ajt", data.ajt, { path: "/" });
    setCookie("AccType", data.accType, { path: "/" });
    setCookie("accId", data.accId, { path: "/" });
    setCookie("name", data.name, { path: "/" });
    setCookie("email", data.email, { path: "/" });
    //Second: update states:
    setAccInfo(data);
    setAuthT(true);
  };

  //Function to log off ORIGINAL
  /* 
  const logOffRemoveCookies = () => {
    //First remove cookies:
    const removeAllAuthCookies = () => {
      removeCookie("ajt");
      removeCookie("AccType");
      removeCookie("accId");
      removeCookie("name");
      removeCookie("email");
    };
    removeAllAuthCookies();
    //Second clean states:
    setAccInfo({});
    setAuthT(false);
  };
*/
  //New Function to log off
  //Original cant make it work thru button at AccIdCheck protection
  //Does not work either
  const logOffRemoveCookies = () => {
    //First remove cookies:
    removeCookie("ajt");
    removeCookie("AccType");
    removeCookie("accId");
    removeCookie("name");
    removeCookie("email");
    //Second clean states:
    setAccInfo({});
    setAuthT(false);
  };

  const data = { authT, accInfo, logInAddCookies, logOffRemoveCookies };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;

// const AuthProvider = ({ children }) => {
// 	//const [cookies, setCookie] = useCookies(['jak']);

// 	//const [auth, setAuth] = useState(initialAuth);

// 	const handleAuth = (auth) => {
// 		if (auth) {
// 			setAuth(null);
// 		} else {
// 			setAuth(true);
// 		}
// 	};

// 	const logOff = (auth) => {
// 		if (auth) {
// 			setAuth(null);
// 			console.log("auth to null bc sign out");
// 		}
// 	};

// 	const data = { auth, handleAuth, logOff };

// 	return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
// };
