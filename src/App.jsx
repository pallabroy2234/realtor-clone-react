import {Route, Routes} from "react-router";
import {BrowserRouter} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import Header from "./components/Header";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path='/'
            element={<Home />}
          />
          <Route
            path='/profile'
            element={<Profile />}
          />
          <Route
            path='/sign-in'
            element={<SignIn />}
          />
          <Route
            path='/sign-up'
            element={<SignUp />}
          />
          <Route
            path='/offers'
            element={<Offers />}
          />
          <Route
            path='/forgot-password'
            element={<ForgotPassword />}
          />
        </Routes>
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </BrowserRouter>
    </>
  );
};

export default App;
