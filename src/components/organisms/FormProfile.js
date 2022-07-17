import React from "react";

import NavBar from '../atoms/Navbar'
import Profile from '../molecules/Profile/MyProfile'
import NavProfile from '../molecules/Profile/NavProfile'
import Footer from '../Footer'


function FormProfile() {
  return (
    <>
      <NavBar />
      <Profile />
      <NavProfile />
      <Footer />
    </>
  );
}

export default FormProfile;