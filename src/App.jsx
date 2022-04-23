import React, { useState, useEffect } from "react";

import "./index.css";
import "./styles/index.scss";
import "./styles/sass/index.scss";
// import "./styles/sass/scss/main.scss";
// import "bootstrap/dist/css/bootstrap.min.css";

import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

import { AccountBox } from "./components/accountBox";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import Events from "./pages/Events";
import AdminHome from "./pages/Admin/AdminHome";
import AdminEvent from "./pages/Admin/AdminEvent";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
          <Route path="/auth" element={<AccountBox />}></Route>
          <Route path="/page-one" element={<PageOne />}></Route>
          <Route path="/page-two" element={<PageTwo />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin/event/:id" element={<AdminEvent />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
