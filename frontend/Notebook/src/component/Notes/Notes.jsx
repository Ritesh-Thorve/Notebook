import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NoteContext from "../../context/note/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useAlert } from "../../context/note/alert/alertContext";

function Notes() {
  const navigate = useNavigate();
  const alert = useAlert();
  const context = useContext(NoteContext);
  const { notes, getNotes, editNote } = context;
  const [note, setNote] = useState({ id: "", etitle: "", edescription: "", etag: "" });
  const ref = useRef(null);
  const refClose = useRef(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      getNotes();
    }
  }, [navigate, getNotes]);

  const handleClick = (e) => {
    e.preventDefault();
    if (note.etitle.length < 5 || note.edescription.length < 5) {
      alert.error("Title and Description must be at least 5 characters long.");
      return;
    }
    editNote(note.id, note.etitle, note.edescription, note.etag);
    refClose.current.click();
    alert.success("Note Updated Successfully");
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

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
        data-bs-target="#editNoteModal"
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="editNoteModal"
        tabIndex="-1"
        aria-labelledby="editNoteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="editNoteModalLabel">
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
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition-all"
                ref={refClose}
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all"
                onClick={handleClick}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Display Notes */}
      <div className="max-w-screen mt-14 px-5">
        <h2 className="text-start text-xl font-semibold mb-4">Your Important Notes</h2>
        {notes && notes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {notes.map((note) => (
              <Noteitem key={note._id} updateNote={updateNote} note={note} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No notes available</p>
        )}
      </div>
    </>
  );
}

export default Notes;
