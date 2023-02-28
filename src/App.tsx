import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import Home from './pages/home/home';
import Navigation from './components/navigation/navigation.component';
import Skills from './pages/skills/skills';
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect } from 'react';


function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <Router>
    <Navigation/>
      <Routes>
            <Route path="/" element={<Navigation/>} />
            <Route index={true} element={<Home/>} />
            <Route path="skills" element={<Skills/>} />
      </Routes>
      </Router>
  );
}

export default App;
