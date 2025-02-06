import React from "react" 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import About from "./component/About"; 
import NoteProvider from "./context/note/NoteProvider";
import Navbar from "./component/Navbar";

function App() { 

  return (
     
    <>
    <NoteProvider> 
    <div className="container">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router> 
    </div>
    </NoteProvider>
    </>
  )
}

export default App
