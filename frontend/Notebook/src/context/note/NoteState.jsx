import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const url = "http://localhost:5001";
  const initialNotes = [];
  const [notes, setNotes] = useState(initialNotes);

  // Get All Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${url}/api/notes/fetchnotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc",
        },
      });
      const json = await response.json();
      setNotes(json);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  // Add Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${url}/api/notes/addnote`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();
      setNotes([...notes, json]); // Add the new note from API response
    } catch (error) {
      console.error("Error adding note:", error);
    }
  };

  // Delete Note
  const deleteNote = async (id) => {
    try {
      await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc",
        },
      });

      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  // Edit Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc",
        },
        body: JSON.stringify({ title, description, tag }),
      });

      const json = await response.json();

      setNotes(
        notes.map((note) =>
          note._id === id ? { ...note, title, description, tag } : note
        )
      );
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  return (
    <NoteContext.Provider value={{ notes, setNotes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
