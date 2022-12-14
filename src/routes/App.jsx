import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import Skills from "../pages/Skills";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Layout from "../container/Layout";



const App = () => {
    return (
      <Router>   
        <Layout>
          <Routes>
          <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/about" element={<About/>} />
                    <Route exact path="/skills" element={<Skills/>} />
                    <Route exact path="/portfolio" element={<Portfolio/>} />
                    <Route exact path="/contact" element={<Contact/>} />
                    <Route path="*" element={<NotFound/>} />
          </Routes>        
          </Layout>     
      </Router>
    );
  }
  
  export default App;