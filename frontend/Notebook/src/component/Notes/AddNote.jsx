import React, { useContext, useState } from 'react';
import NoteContext from '../../context/note/noteContext';

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "" });
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h1 className="text-center text-2xl font-bold  ">Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" id="title" required minLength={5} value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" required minLength={5} value={note.description} onChange={onChange} />
        </div>

        <div className="mb-3">
          <label htmlFor="tag" className="form-label">Tag</label>
          <input type="text" className="form-control text-sm" id="tag" name="tag" placeholder='Ex. #hardwork ' required value={note.tag} onChange={onChange} />
        </div>

        <button disabled={note.title<5 || note.description<5} type="submit" className="btn btn-primary" onClick ={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
