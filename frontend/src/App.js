//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//React dom browser
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//imp contexts/providers
import { AuthProvider } from "./context/AuthContex";
//import { ChakraProvider } from "@chakra-ui/react";

//Import pages:
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/authPage/LoginPage";
//user pages
import RegisterStorePage from "./pages/authPage/RegisterStorePage";
import RegisterUserPage from "./pages/authPage/RegisterUserPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserReservesPage from "./pages/UserReservesPage";
import NewPetPage from "./pages/userPages/NewPetPage.jsx";
import MakeReservePage from "./pages/userPages/MakeReservePage";
//store pages
import StoreProfilePage from "./pages/storePages/StoreProfilePage";
import StoreReservesPages from "./pages/storePages/StoreReservesPage";
import TestingPage from "./pages/TestingPage";

//Main app
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* index */}
          <Route path="/" element={<IndexPage />} />
          {/* auth routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register/user" element={<RegisterUserPage />} />
          <Route path="/register/store" element={<RegisterStorePage />} />
          {/* user pages */}
          <Route path="/user/:id" element={<UserProfilePage />} />
          <Route path="/user/:id/reserves" element={<UserReservesPage />} />
          <Route path="/user/:id/pets/new" element={<NewPetPage />} />
          <Route path="/store/:id/newreserve" element={<MakeReservePage />} />
          {/* store pages */}
          <Route path="/store/:id" element={<StoreProfilePage />} />
          <Route path="/store/:id/reserves" element={<StoreReservesPages />} />
          {/* 404 page */}
          <Route path="/testing" element={<TestingPage />} />
          <Route path="*" element={<h1> Page does not exist </h1>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
