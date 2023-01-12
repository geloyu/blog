import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/css/App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Test from "./Contents";
import Test2 from "./Components/Profile";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="body">
        <Sidebar></Sidebar>
        <Test></Test>
      </div>
    </div>
  );
}

export default App;
