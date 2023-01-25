import React from "react";
import "./Styles/css/App.css";
import "./Styles/css/Reset.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BE_1 from "./Components/BackEnd/BE_1";
import BE_2 from "./Components/BackEnd/BE_2";
import CS_1 from "./Components/ComputerSience/CS_1";
import CS_2 from "./Components/ComputerSience/CS_2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="body">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/Blog" element={<Home />}></Route>
            <Route path="/be1" element={<BE_1 />}></Route>
            <Route path="/be2" element={<BE_2 />}></Route>
            <Route path="/cs1" element={<CS_1 />}></Route>
            <Route path="/cs2" element={<CS_2 />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
