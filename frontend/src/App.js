//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

//React dom browser
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//imp contexts/providers
import { AuthProvider } from "./context/AuthContex";
//import { ChakraProvider } from "@chakra-ui/react";

//Import pages:
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterStorePage from "./pages/RegisterStorePage";
import RegisterUserPage from "./pages/RegisterUserPage";
import UserProfilePage from "./pages/UserProfilePage";
import UserReservesPage from "./pages/UserReservesPage";

//Main app
function App() {
	return (
		<AuthProvider>
			<Router>
				<Routes>
					<Route path="/" element={<IndexPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/register/user" element={<RegisterUserPage />} />
					<Route path="/register/store" element={<RegisterStorePage />} />
					<Route path="/user/:id" element={<UserProfilePage />} />
					<Route path="/user/:id/reservas" element={<UserReservesPage />} />

					<Route path="*" element={<h1> Page does not exist </h1>} />
				</Routes>
			</Router>
		</AuthProvider>
	);
}

export default App;
