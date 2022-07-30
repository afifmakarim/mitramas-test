import React from "react";
import Head from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import Sidebar from "../components/Sidebar/Sidebar";

import { Outlet } from "react-router-dom";

export default function Homepage() {
  return (
    <div className="d-flex">
      <Sidebar />
      <Layout>
        <Head />
        <Outlet />
      </Layout>
    </div>
  );
}
