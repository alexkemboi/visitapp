"use client"
import React from "react";
import Dashboard from "@/components/Dashboard/dashboard";
import Layout from "@/components/layout";

const DashboardPage = () => {
  return (
    <div className="h-full">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
};

export default DashboardPage;

