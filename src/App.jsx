import React, { useState, useEffect } from "react";

import Layout from "./components/layout/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import { AccountBox } from "./components/accountBox";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import AdminHome from "./pages/Admin/AdminHome";
import AdminEvent from "./pages/Admin/AdminEvent";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/auth" element={<AccountBox />}></Route>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/page-one" element={<PageOne />}></Route>
          <Route path="/page-two" element={<PageTwo />}></Route>
          <Route path="/page-three" element={<PageThree />}></Route>
          <Route path="/admin" element={<AdminHome />}></Route>
          <Route path="/admin/event/:id" element={<AdminEvent />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
