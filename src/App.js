import Landing from "./components/LandingPage";
import ContactForm from "./components/ContactPage";
import Login from "./components/LoginPage";
import SignUp from "./components/SignUpPage";
import ForgotPassword from "./components/ForgotPasswordPage";
import { Routes, Route } from "react-router-dom";
import ResetPassword from "./components/ResetPasswordPage";
import Content from "./components/Content";

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
      <Route path="/contact-us" element={<ContactForm />} />
      <Route path="/resetpassword" element={<ResetPassword />}/>
      
    </Routes>
    
  );
}

export default App;
