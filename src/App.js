import React from "react";
import "./Styles/css/App.css";
import "./Styles/css/Reset.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComputerSience from "./Components/ComputerSience";
import Blog from "./Components/BackEnd";
import Home from "./Components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      <div className="body">
        <Sidebar></Sidebar>
        <Routes>
              <Route path="/Blog" element={<Home />}></Route>
              <Route path="/cs" element={<ComputerSience />}></Route>
              <Route path="/be" element={<Blog />}></Route>
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
