import React, { useState } from "react";
import Navbar from "./componets/Navbar";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./home/Home.js";
import Document from "./document/Document";
import Login from "./login/Login";
import Register from "./register/register";
import Product from "./containers/Product";
import About from "./containers/About";
import Support from "./containers/Support";
import Pricing from "./containers/Pricing";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import ShowVersions from "./home/ShowVersions";

export default function App() {
  const [navbarType, setNavbarType] = useState(false); // 0 for homepage, 1 for document page
  return (
    <RecoilRoot>
      <Router>
        <Navbar navbarType={navbarType} />
        <Routes>
          <Route
            path="/"
            element={
              <Home navbarType={navbarType} setNavbarType={setNavbarType} />
            }
          ></Route>
          <Route path="/document/:name" element={<Document />}></Route>
          <Route path="/document/:name/:label" element={<Document />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/product" element={<Product />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/support" element={<Support />}></Route>
          <Route path="/pricing" element={<Pricing />}></Route>
          <Route path="/:name" element={<ShowVersions />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
