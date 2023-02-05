import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//Import utils:
import { getUserById } from "../services/UserAPI";
import { getThreeFollwingAppointmentsByUserId } from "../services/AppointmentsAPI";

//Bootstrap
import Container from "react-bootstrap/Container";

//Import Components
import Appbar from "../components/Navbar/AppBar";
import UserProfileDisplay from "../components/UserProfileUser/UserProfileDisplay";
import UserPetsDisplay from "../components/UserProfileUser/UserPetsDisplay";
import UserAppointmentsDisplay from "../components/UserProfileUser/UserAppointmentsDisplay";
import Footer from "../components/Footer";

//Import context
import { useContext } from "react";
import AuthContext from "../context/AuthContex";

//Styles
import { Paper } from "@mui/material";

//Ejemplo para userPetsDisplay:

const UserProfilePage = () => {
  let params = useParams();
  let userId = params.id;
  //#TODO: might rethink how to save the jwt, bc if you refresh (f5) inside page, data will not showup
  //might be bc the states dont refresh as soon

  //Get context data:
  const { accInfo } = useContext(AuthContext);
  let tokenJ = accInfo.ajt;
  // console.log(tokenJ);

  //Get user info for UserProfileDisplay, users pets for UserPetsDisplay
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);
  const [userData, setUserData] = useState({});
  //userBirthday will be = [day,month,year, complete, string]

  //Use Effect to get data...
  useEffect(() => {
    //first user Data:
    const getUserData = async (userId, token) => {
      //get data:
      try {
        let userDataFetch = await getUserById(userId, token);
        // console.log(userDataFetch.data.userByID);
        setUserData(userDataFetch.data.userByID);

        //Finish handling date
        setLoadingUserInfo(false);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData(userId, tokenJ);
  }, [tokenJ, userId]);

  //Get users appoints.
  const [loadingUserAppoints, setLoadingUsersAppoints] = useState(false);
  const [userAppoints, setUsersAppoints] = useState([]);

  const updateUsersAppoints = async () => {
    setLoadingUsersAppoints(true);
    //first make the fetch.
    let usersAppointsFetch = await getThreeFollwingAppointmentsByUserId(
      userId,
      tokenJ
    );
    console.log(usersAppointsFetch.data.ThreeFollowingAppointments);
    setUsersAppoints(usersAppointsFetch.data.ThreeFollowingAppointments);
    setLoadingUsersAppoints(false);
  };

  return (
    <div>
      <Appbar />
      <Container>
        <Paper elevation={15}>
          <UserProfileDisplay loading={loadingUserInfo} user={userData} />
        </Paper>
        <Paper elevation={10}>
          <UserAppointmentsDisplay
            loading={loadingUserAppoints}
            fetchData={updateUsersAppoints}
            userAppointments={userAppoints}
          />
        </Paper>
        <Paper elevation={10}>
          <UserPetsDisplay />
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default UserProfilePage;
