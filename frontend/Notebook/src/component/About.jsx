import React, { useEffect } from 'react'
import Navbar from './Navbar' 
import { useContext } from 'react'
import NoteContext from '../context/note/NoteContext'

function About() {
  const a = useContext(NoteContext)
   
  useEffect(() => {
    a.update();
  }, [])
  

  return (
    <div>
      <Navbar/>
      Hi thses is About page {a.state.name} and age {a.state.age}
    </div>
  )
}

export default About
