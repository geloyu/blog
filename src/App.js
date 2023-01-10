import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./Styles/css/App.css";
import Sidebar from "./Sidebar";
import Header from "./Header";
import Test from "./Components/Test";
import Test2 from "./Components/Test2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <div className="body">
          <Sidebar></Sidebar>
          <Routes>
            <Route path="/test" component={Test}>
              sd
            </Route>
            <Route path="/test2" component={Test2}>
              ad
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
