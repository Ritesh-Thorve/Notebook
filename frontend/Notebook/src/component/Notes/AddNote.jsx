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
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-center text-2xl md:text-3xl font-bold mb-6">Add Notes</h1>
      <form className="bg-white p-6 rounded-lg shadow-md">
        {/* Title Field */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
            Title
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="title"
            id="title"
            required
            minLength={5}
            value={note.title}
            onChange={onChange}
            aria-describedby="titleHelp"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
            Description
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="description"
            name="description"
            required
            minLength={5}
            value={note.description}
            onChange={onChange}
            aria-describedby="descriptionHelp"
          />
        </div>

        {/* Tag Field */}
        <div className="mb-6">
          <label htmlFor="tag" className="block text-sm font-medium text-gray-700 mb-1">
            Tag
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="tag"
            name="tag"
            value={note.tag}
            onChange={onChange}
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-blue-300"
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