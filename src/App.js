import * as React from 'react';
import Navbar from './componets/Navbar';
import { Link, Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './home/Home.js';
import Document from './document/Document';
import Login from './login/Login';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import ShowVersions from './home/ShowVersions';






export default function App() {
  return (
    <RecoilRoot>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          
          <Route path="/document/:name" element={<Document />}></Route>
          <Route path="/document/:name/:label" element={<Document />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:name" element={<ShowVersions />}></Route>
        </Routes>
      </Router>
    </RecoilRoot>
  );
}
