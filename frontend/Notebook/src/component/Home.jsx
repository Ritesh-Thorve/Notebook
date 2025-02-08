import React, { useContext } from 'react'
import Navbar from './Navbar'  
import Notes from './Notes/notes' 


function Home() {

  return (
    <>
       <div> 
       <Navbar />
       <Notes/>
       </div>
    </>
  )
}

export default Home
