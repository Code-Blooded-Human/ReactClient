import * as React from "react";
import Navbar from "./componets/Navbar";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";
import { useState } from "react";
import Home from "./home/Home.js";
import Document from "./document/Document";
import Login from "./login/Login";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export default function App() {
  const [navbarVisible, setNavbarVisible] = useState("hidden");
  return (
    <RecoilRoot>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/document/:name" element={<Document />}></Route>
          <Route path="/document/:name/:label" element={<Document />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
