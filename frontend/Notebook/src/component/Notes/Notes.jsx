import React, { useContext, useEffect, useRef, useState } from 'react';
import NoteContext from '../../context/note/noteContext';
import Noteitem from './NoteItem';
import AddNote from './AddNote';

function Notes() {
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });



    const handleClick = (e) => {
        console.log("Updating Note", note)
        editNote(note.id, note.etitle, note.edescription, note.etag)
        refClose.current.click();
    };

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };


    useEffect(() => {
        getNotes();
    }, [])

    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({id: currentNote._id, etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag })
    }

    const ref = useRef(null)
    const refClose = useRef(null);

    return (
        <>
            <AddNote />

            <button ref={ref} type="button" className="btn btn-primary d-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-etitle" id="exampleModalLabel">Edit Note</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">

                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">etitle</label>
                                    <input type="text" className="form-control" name="etitle" id="etitle" required value={note.etitle} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">edescription</label>
                                    <input type="text" className="form-control" id="edescription" name="edescription" required value={note.edescription} onChange={onChange} />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor=" etag" className="form-label"> etag</label>
                                    <input type="text" className="form-control text-sm" id="etag" name=" etag" required value={note.etag} onChange={onChange} />
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" ref={refClose} data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={handleClick} >Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


            <div className='max-w-screen'>
                <div className="row my-3">
                    <h2>Your Notes</h2>
                    {notes && notes.length > 0 ? (
                        notes.map((note) => (
                            <Noteitem key={note._id} updateNote={updateNote} note={note} />
                        ))
                    ) : (
                        <p>No notes available</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default Notes;
