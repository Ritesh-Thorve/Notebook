import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const initialNotes = [
    {
      "_id": "67a4e0b2f3169f628e3de7341",
      "user": "67937d19217e50cd86cb44e4",
      "title": "Ritesh",
      "description": "Ritu don hu",
      "tag": "#bro",
      "date": "2025-02-06T16:17:54.287Z",
      "__v": 0
    },
    {
      "_id": "67a4e0d4f3169f628e3de73712",
      "user": "67937d19217e50cd86cb44e4",
      "title": "Pappa",
      "description": "pappa ji bol pappaji",
      "tag": "#bro",
      "date": "2025-02-06T16:18:28.815Z",
      "__v": 0
    }
  ];

  const [notes, setNotes] = useState(initialNotes);

  const addNote = (title, description, tag) => {
    console.log("Adding note...");
    const note = {
      "_id": "67a4e0d4f3169f628e3de7376",
      "user": "67937d19217e50cd86cb44e4",
      "title": title,
      "description": description,
      "tag": tag,
      "date": new Date().toISOString(),
      "__v": 0
    };
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    // Functionality not yet implemented
    console.log('deleting note with note ID:',id);
    const newNote = notes.filter((note) =>{return note._id !== id});
    setNotes(newNote);
  };

  const editNote = () => {
    // Functionality not yet implemented
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
