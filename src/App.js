import Landing from "./components/LandingPage";
import ContactForm from "./components/ContactPage";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import ForgotPassword from "./components/ForgotPasswordPage";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./components/ResetPasswordPage";
import Content from "./components/Content";
import UpdateProfile from "./components/user_Profile/UserProfile"; 
import UserProfile from "./components/user_Profile/UpdateUserProfile";


import "./styles/colorCamp.css";  
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Content />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/resetpassword" element={<ResetPassword />}/>
      <Route path="/viewprofile" element={<UpdateProfile />} />
      <Route path="/updateprofile" element={<UserProfile />} />
      
    </Routes>
    
  );
}

export default App;
