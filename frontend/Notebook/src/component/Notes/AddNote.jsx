import React, { useContext, useState } from 'react';
import NoteContext from '../../context/note/noteContext';
import { useAlert } from '../../context/note/alert/alertContext';

function AddNote() {
  const alert = useAlert();
  const context = useContext(NoteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: '', description: '', tag: '' });

  const handleClick = async (e) => {
    e.preventDefault();

    // Validate input fields
    if (note.title.length < 5 || note.description.length < 5) {
      alert.error('Title and Description must be at least 5 characters long.');
      return;
    }

    try {
      // Add the note
      await addNote(note.title, note.description, note.tag);

      // Clear the form
      setNote({ title: '', description: '', tag: '' });

      // Show success toast
      alert.success('Note Added Successfully');
    } catch (error) {
      alert.error('Failed to add note. Please try again.');
    }
  };

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <div className="container my-3">
      <h1 className="text-center text-2xl font-bold">Add Notes</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            name="title"
            id="title"
            required
            minLength={5}
            value={note.title}
            onChange={onChange}
            aria-describedby="titleHelp"
          /> 
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            name="description"
            required
            minLength={5}
            value={note.description}
            onChange={onChange}
            aria-describedby="descriptionHelp"
          /> 
        </div>
        <div className="mb-3">
          <label htmlFor="tag" className="form-label">
            Tag
          </label>
          <input
            type="text"
            className="form-control text-sm"
            id="tag"
            name="tag"

            value={note.tag}
            onChange={onChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleClick}
          disabled={note.title.length < 5 || note.description.length < 5}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddNote;