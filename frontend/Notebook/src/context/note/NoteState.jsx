import NoteContext from "./noteContext";
import React, { useState } from "react";

const NoteState = (props) => {
  const url = "http://localhost:5000"
  const initialNotes = []
  const [notes, setNotes] = useState(initialNotes)

  // Get all Notes
  const getNotes = async () => {
    try {
      const response = await fetch(`${url}/api/notes/fetchnotes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc"
        }
      });
      const json = await response.json()
      setNotes(json)
    } catch (error) {
      console.error("Failed to add note:", error);
    }

  }

  // Add a Note
  const addNote = async (title, description, tag) => {
    try {
      const response = await fetch(`${url}/api/notes/addnote`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc"
        },
        body: JSON.stringify({ title, description, tag })
      });

      const note = await response.json();

      if (!response.ok) {
        console.error("Error adding note:", note);
        return;
      }

      setNotes([...notes, note]); // spread operator to update state with existing note
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  };

  // Delete a Note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${url}/api/notes/deletenote/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc"
        }
        });
        const json = response.json();
      const newNotes = notes.filter((note) => { return note._id !== id })
      setNotes(newNotes)
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  }


  // Edit a Note
  const editNote = async (id, title, description, tag) => {
    try {
      const response = await fetch(`${url}/api/notes/updatenote/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjc5MzdkMTkyMTdlNTBjZDg2Y2I0NGU0In0sImlhdCI6MTczNzcxOTA4NX0.SlI11NkINehyQ80uDcERKxSypWVFX9tkoPS15HFCeqc"
        },
        body: JSON.stringify({ title, description, tag })
      });
      const json = await response.json();

      let newNotes = JSON.parse(JSON.stringify(notes))

      // Logic to edit in client
      for (let index = 0; index < newNotes.length; index++) {
        const element = newNotes[index];
        if (element._id === id) {
          newNotes[index].title = title;
          newNotes[index].description = description;
          newNotes[index].tag = tag;
          break;
        }
      }
      setNotes(newNotes);
    } catch (error) {
      console.error("Failed to add note:", error);
    }
  }

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
      {props.children}
    </NoteContext.Provider>
  )

}
export default NoteState;