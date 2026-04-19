import { Route, Routes } from "react-router-dom";

import React from 'react'
import LoginForm from "../components/UserAuth/Login";
import LandingPage from "../components/LandingPage";
import Vinhos from "../components/Vinhos";
import RegisterForm from "../components/UserAuth/Register";

const AppRoutes = () => {
  return (
    
    <>
    <Routes>

    <Route path="/" element={<LandingPage />} />
    <Route path="/login" element={<LoginForm />} />
    <Route path="/register" element={<RegisterForm />} />
    <Route path="/vinhos" element={<Vinhos />} />
    </Routes>
  
    </>
    
  )
}

export default AppRoutes

