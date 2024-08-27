"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import ApplyCover from "@/components/Userregistration/Userregistration";

import Layout from "@/components/layout";
import SystemSetup from "@/components/Setup/Setup";

const SetupPage = () => {
  return (

    <div className='border border-solid rounded ' >
      <Layout>
        <SystemSetup />
      </Layout>
    </div>

  );
};

export default SetupPage;

