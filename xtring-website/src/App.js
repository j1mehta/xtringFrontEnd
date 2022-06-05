import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import XtringScore from "./components/pages/XtringScore";
//import About from './components/pages/About';
//import Team from "./components/pages/Team";

function App() {
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home/>} />
                    <Route path='/xtringscore' element={<XtringScore/>} />
                    {/*<Route path='/about' element={<About/>} />
                    <Route path='/team' element={<Team/>} />*/}
                </Routes>
            </Router>
        </>
    );
}

export default App;