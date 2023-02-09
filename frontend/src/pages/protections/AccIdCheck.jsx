import { useContext } from "react";
import { useParams } from "react-router-dom";

//Context
import AuthContext from "../../context/AuthContex";

//Import error componentes
import IdsNotEqual from "../../components/Errors/IdsNotEqual";

const AccIdCheck = ({ children }) => {
  //get from outlet context, signout function:

  //Get url id
  let params = useParams();
  let paramId = Number(params.id);
  // console.log("id url: ", paramId);
  //Get user id from context data cookie:
  const { accInfo } = useContext(AuthContext);
  let authId = accInfo.accId;
  // console.log("auth id: ", authId);

  //Conditional returns
  if (paramId == authId) {
    // console.log("same");
    return children;
  } else {
    // console.log("none");
    return <IdsNotEqual />;
  }
};

export default AccIdCheck;
