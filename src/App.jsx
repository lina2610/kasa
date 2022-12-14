import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/App.css";

// import des pages

import Home from "./pages/Home";
import About from "./pages/About";
import Announcement from "./pages/Announcement";
import Error from "./pages/Error";

//import du header et du footer

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <div className="App">
        <Router>
          <Header />

          <main>
            <Routes>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="products/:productId" element={<Announcement />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </main>

          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
