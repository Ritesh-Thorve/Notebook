import React, { useContext, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NoteContext from '../../context/note/noteContext';
import Noteitem from './Noteitem';
import AddNote from './AddNote';
import { useAlert } from '../../context/note/alert/alertContext';

function Notes() {
    const navigate = useNavigate();
    const alert = useAlert();
    const context = useContext(NoteContext);
    const { notes, getNotes, editNote } = context;
    const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });

    const ref = useRef(null);
    const refClose = useRef(null);

    // Fetch notes on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        } else {
            getNotes();
        }
    }, [navigate, getNotes]);

    // Handle saving edited note
    const handleClick = (e) => {
        e.preventDefault(); 
        if (note.etitle.length < 5 || note.edescription.length < 5) {
            alert.error('Title and Description must be at least 5 characters long.');
            return;
        } 
        editNote(note.id, note.etitle, note.edescription, note.etag);
        refClose.current.click(); 
        alert.success('Note Updated Successfully');
    };

    // Handle input changes in the edit form
    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    };

    // Open edit modal and populate with current note data
    const updateNote = (currentNote) => {
        ref.current.click();
        setNote({
            id: currentNote._id,
            etitle: currentNote.title,
            edescription: currentNote.description,
            etag: currentNote.tag,
        });
    };

    return (
        <>
            <AddNote />

            {/* Edit Note Modal */}
            <button
                ref={ref}
                type="button"
                className="btn btn-primary d-none"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
            >
                Launch demo modal
            </button>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Edit Note
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="etitle" className="form-label">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="etitle"
                                        id="etitle"
                                        required
                                        minLength={5}
                                        value={note.etitle}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="edescription" className="form-label">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="edescription"
                                        name="edescription"
                                        required
                                        minLength={5}
                                        value={note.edescription}
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="etag" className="form-label">
                                        Tag
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control text-sm"
                                        id="etag"
                                        name="etag"
                                        value={note.etag}
                                        onChange={onChange}
                                    />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                ref={refClose}
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={handleClick}
                            >
                                Save changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Display Notes */}
            <div className="max-w-screen">
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