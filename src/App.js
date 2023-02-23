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
import LJAVA from "./Components/Language/JAVA_Exception";

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
            <Route path="back-end/spring" element={<BESPRING />}></Route>
            <Route
              path="back-end/springbatch"
              element={<BESPRINGBATCH />}
            ></Route>
            <Route path="back-end/db-jpa" element={<BEDBJPA />}></Route>
            <Route
              path="back-end/transaction"
              element={<TRANSACTION />}
            ></Route>
            <Route path="back-end/db-rdbms" element={<RDBMS />}></Route>

            {/* ComputerSience */}
            <Route
              path="computer-sience/browser"
              element={<CSBRWOSER />}
            ></Route>
            <Route path="computer-sience/oop" element={<CSOOP />}></Route>
            <Route path="computer-sience/rest" element={<CSREST />}></Route>

            {/* Language */}
            <Route path="java/exception" element={<LJAVA />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
