import React from "react" 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import NoteState from "./context/note/NoteState.jsx";
import Login from "./component/Auth/Login.jsx";
import Signup from "./component/Auth/Signup.jsx";

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
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>  
    </NoteState>
    </>
  )
}

export default App
