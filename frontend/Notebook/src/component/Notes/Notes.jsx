import React,{useContext} from 'react'
import NoteContext from '../../context/note/NoteContext'
import Noteitem from './noteItem';

function Notes() {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context;


    return (
        <>


            <div className="row my-3" >
                <h2>Your Notes</h2>
                {notes.map((note) => {
                    return  <Noteitem   note={note} />
                })}
            </div>
        </>
    )
}

export default Notes
