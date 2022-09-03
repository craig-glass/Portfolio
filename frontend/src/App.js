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
        <About />
        <Routes>
          <Route path="/skills" element={<Skills />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
        </Routes>
      </Router>

    </main>
  );
}

export default App;