"use client"
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Layout from "@/components/layout";
import Wallet from "@/components/Wallet/Wallet";


const WalletPage = () => {
  return (

    <div>
      <Layout >
        <Wallet />
      </Layout>
    </div>

  );
};

export default WalletPage;

