import React from "react" 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import About from "./component/About"; 
import NoteProvider from "./context/note/NoteProvider";

function App() { 

  return (
     
    <>
    <NoteProvider>
     <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </NoteProvider>
    </>
  )
}

export default App
