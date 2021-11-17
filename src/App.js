import "./App.css";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;
