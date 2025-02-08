import React, { useContext } from 'react'
import NoteContext from '../../context/note/NoteContext'

function Noteitem(props) {
  const context = useContext(NoteContext)
  const {deleteNote} = context;
  const {note } = props;

 

  return ( 
      <div className='col-md-3'>
      <div className="card mt-3 " >
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p> 
          <div className='flex  gap-3'>
          <i className="fa-solid fa-pen-to-square"></i>
          <i className="fa-solid fa-trash-can-arrow-up" onClick={() => {deleteNote(note._id)}}></i>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Noteitem
