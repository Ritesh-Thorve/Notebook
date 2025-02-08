import React, { useContext, useState } from 'react';
import NoteContext from '../../context/note/NoteContext';

function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", description: "", tag: "default" });

  const handleClick = (e) => {
    e.preventDefault();  
    addNote(note.title, note.description, note.tag);
    setNote({ title: "", description: "", tag: "default" });  
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return ( 
    <div className="container my-3">
      <h1 className="text-center text-2xl font-bold">Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" name="title" id="title" required value={note.title} onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input type="text" className="form-control" id="description" name="description" required value={note.description} onChange={onChange} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default AddNote;
