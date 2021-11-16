import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Header from "./components/layout/Header";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
