import { useContext } from "react";
import { Outlet } from "react-router-dom";

//Context
import AuthContext from "../../context/AuthContex";

//Import error componentes
import TokenError from "../../components/Errors/TokenError";

const AuthRequired = () => {
  //Get context data:
  const { authT } = useContext(AuthContext);

  if (authT === false) {
    console.log(authT);
    return <TokenError />;
  }
  //return outlet
  return <Outlet />;
};

export default AuthRequired;
