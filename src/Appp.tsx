import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Layout/base/Navbar";
import BaseLayout from "./Layout/base/BaseLayout";
import Footer from "./Layout/base/Footer";
type Props = {};

const Appp = (props: Props) => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<BaseLayout />} />;
      </Routes>
      <Footer />
    </>
  );
};

export default Appp;
