import React from "react" 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import NoteState from "./context/note/NoteState.jsx";

function App() { 

  return (
     
    <>
    <NoteState>  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>  
    </NoteState>
    </>
  )
}

export default App
