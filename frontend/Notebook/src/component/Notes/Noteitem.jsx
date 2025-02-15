  import React, { useContext } from "react";
  import NoteContext from "../../context/note/noteContext";
  import { useAlert } from "../../context/note/alert/alertContext";

  function Noteitem(props) {
    const alert = useAlert();
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    const handleDelete = async (id) => {
      try {
        await deleteNote(id);
        alert.success("Note deleted successfully!");
      } catch (error) {
        alert.error("Failed to delete note.");
      }
    };

    return (
      <div className="relative bg-white shadow-md hover:shadow-lg transition-all p-5 rounded-xl border border-gray-200 my-10">
        <div className="flex justify-between items-center mb-3">
          <h5 className="text-lg font-semibold text-gray-800">{note.title}</h5>
          <span className="text-sm px-2 py-1 bg-blue-100 text-blue-600 rounded-md">
            {note.tag}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{note.description}</p>
        <div className="flex gap-4">
          <i
            className="fa-solid fa-pen-to-square text-blue-500 hover:text-blue-700 cursor-pointer transition-all text-lg"
            onClick={() => updateNote(note)}
          ></i>
          <i
            className="fa-solid fa-trash-can text-red-500 hover:text-red-700 cursor-pointer transition-all text-lg"
            onClick={() => handleDelete(note._id)}
          ></i>
        </div>
      </div>
    );
  }

  export default Noteitem;
