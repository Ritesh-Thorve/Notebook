import React, { useContext } from 'react'
import Navbar from './Navbar'  
import Notes from './Notes/Notes' 


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
