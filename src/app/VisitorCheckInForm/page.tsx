"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import VisitorCheckInForm from "@/components/VisitorCheckInForm/VisitorCheckInForm";
import Layout from "@/components/layout";

const PaymentPage = () => {
  return (

    <div>
      <Layout >
        <VisitorCheckInForm />
      </Layout>
    </div>

  );
};

export default PaymentPage;

