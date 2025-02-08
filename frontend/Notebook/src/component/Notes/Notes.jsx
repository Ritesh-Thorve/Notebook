import React, { useContext } from 'react';
import NoteContext from '../../context/note/NoteContext';
import Noteitem from './NoteItem'; 
import AddNote from './AddNote';

function Notes() {
    const context = useContext(NoteContext);
    const { notes } = context;  
    return (
        <> 
            <AddNote />
            <div className="row my-3">
                <h2>Your Notes</h2>
                {notes && notes.length > 0 ? (
                    notes.map((note) => (
                        <Noteitem key={note._id} note={note} />
                    ))
                ) : (
                    <p>No notes available</p>
                )}
            </div>
        </>
    );
}

export default Notes;
