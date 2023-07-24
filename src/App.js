import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import Courses from './Components/pages/Courses';
import Communities from './Components/pages/Communities';
import AboutUs from './Components/pages/AboutUs';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element = {<Home/>}/>
          <Route path='/courses' exact element = {<Courses/>}/>
          <Route path='/communities' exact element = {<Communities/>}/>
          <Route path='/aboutus' exact element = {<AboutUs/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
