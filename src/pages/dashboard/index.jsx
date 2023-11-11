import React from "react";
import Header from "@/components/header";
import Layout from "@/components/layout";

function Dashboard() {
  return (
    <>
      <Layout>
      <Header titleHeader="Dashboard"/>
        <div className="pl-6">
          <h1>Halaman Dashboard</h1>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;
