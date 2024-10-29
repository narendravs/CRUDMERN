import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AddCrud from "./components/AddCrud";
import GetCrud from "./components/GetCrud";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/addCrud" element={<AddCrud />} />
          <Route exact path="/getCrud" element={<GetCrud />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
