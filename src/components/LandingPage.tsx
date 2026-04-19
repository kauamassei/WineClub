import React from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Services from "../components/Services";
import LoginForm from "./UserAuth/Login";

function LandingPage() {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <Footer />

    </>
  );
}

export default LandingPage;
