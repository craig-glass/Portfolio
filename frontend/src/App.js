import './App.css';
import React from "react";
import About from "./components/About";
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (

    <main className='App'>
      <Router>
        <Navbar />
        <br></br>
        <br></br>
        <div className='mainpage'>
          <About />
          <Routes>
            <Route path="/skills" element={<Skills />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
          </Routes>
        </div>

      </Router>
      <br></br>
      <br></br>
    </main>
  );
}

export default App;