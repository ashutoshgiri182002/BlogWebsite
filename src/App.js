import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// Pages------------
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Form from "./pages/AddBlog";
import Content from "./pages/Content";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/Form" element={<Form />} />
        <Route path="/content/:blog_id" element={<Content/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
