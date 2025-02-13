import React, { useContext } from 'react';
import NoteContext from '../../context/note/noteContext'; 
import { useAlert } from '../../context/note/alert/alertContext';

function Noteitem(props) {
  const alert = useAlert()
  const context = useContext(NoteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  const handleDelete = async (id) => {
    try {
      await deleteNote(id);
      return alert.success("Note deleted successfully!");
    } catch (error) {
      alert.error("Failed to delete note.");
    }
  };
  
  return (
    <div className='col-md-3'>
      <div className="card mt-3">
        <div className="card-body">
          <div className='flex gap-3'>
            <h5 className="card-title">{note.title}</h5>
            <p className="card-tag">{note.tag}</p>
          </div>
          <p className="card-text">{note.description}</p>
          <div className='flex gap-3'>
            <i className="fa-solid fa-pen-to-square" onClick={() => updateNote(note)}></i>
            <i className="fa-solid fa-trash-can-arrow-up" onClick={() => handleDelete(note._id)}></i>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Noteitem;
