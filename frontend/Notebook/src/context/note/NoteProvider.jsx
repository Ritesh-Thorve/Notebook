import React from 'react';
import NoteContext from './NoteContext';
import { useState } from 'react';

const NoteProvider = (props) => {
  const s1 = {
    name: 'ritesh',
    age: 20,
  };
 
 
  const [state, setstate] = useState(s1)

  
    const update = () =>{
      setTimeout(() => {
        setstate({
          name: "sanjay",
          age: 2
        })
      }, 1000);
    }
   
    
   

  
  

  return (
    <NoteContext.Provider value={{state,update}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteProvider;
