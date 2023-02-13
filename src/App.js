import React from "react";
import "./Styles/css/App.css";
import "./Styles/css/Reset.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import BESPRING from "./Components/BackEnd/BE_Spring";
import BESPRINGBATCH from "./Components/BackEnd/BE_Spring_Batch";
import BEDBJPA from "./Components/BackEnd/BE_JPA";
import TRANSACTION from "./Components/BackEnd/BE_Transaction";
import RDBMS from "./Components/BackEnd/BE_RDBMS";
import CSBRWOSER from "./Components/ComputerSience/CS_Browser";
import CSOOP from "./Components/ComputerSience/CS_OOP";
import CSREST from "./Components/ComputerSience/CS_REST";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="body">
          <Sidebar></Sidebar>
          <Routes>
            {/* Home */}
            <Route path="/Blog" element={<Home />}></Route>

            {/* BackEnd*/}
            <Route path="/spring" element={<BESPRING />}></Route>
            <Route path="/springbatch" element={<BESPRINGBATCH />}></Route>
            <Route path="/dbjpa" element={<BEDBJPA />}></Route>
            <Route path="/transaction" element={<TRANSACTION />}></Route>
            <Route path="/rdbms" element={<RDBMS />}></Route>

            {/* ComputerSience */}
            <Route path="/browser" element={<CSBRWOSER />}></Route>
            <Route path="/oop" element={<CSOOP />}></Route>
            <Route path="/rest" element={<CSREST />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
