import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";

//Context
import AuthContext from "../../context/AuthContex";

//Import error componentes

const NotAuthRequired = () => {
  const navigate = useNavigate();

  //Get context data:
  const { authT } = useContext(AuthContext);

  if (authT === true) {
    // console.log(authT);
    return navigate("/");
  } else {
    //return outlet
    return <Outlet />;
  }
};

export default NotAuthRequired;
