import TokenError from "../components/Errors/TokenError";
import Footer from "../components/Footer";
import Appbar from "../components/Navbar/AppBar";

const TestingPage = () => {
  return (
    <div>
      <Appbar></Appbar>
      <TokenError></TokenError>
      <Footer></Footer>
    </div>
  );
};

export default TestingPage;
