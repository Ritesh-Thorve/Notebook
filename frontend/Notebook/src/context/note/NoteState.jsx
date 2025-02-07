import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) =>{
    const initaialNotes = [
        {
          "_id": "67a4e0b2f3169f628e3de734",
          "user": "67937d19217e50cd86cb44e4",
          "title": "Ritesh",
          "description": "Ritu don hu",
          "tag": "#bro",
          "date": "2025-02-06T16:17:54.287Z",
          "__v": 0
        },
        {
          "_id": "67a4e0d4f3169f628e3de737",
          "user": "67937d19217e50cd86cb44e4",
          "title": "Pappa",
          "description": "pappa ji bol pappaji",
          "tag": "#bro",
          "date": "2025-02-06T16:18:28.815Z",
          "__v": 0
        },
        {
          "_id": "67a4e0b2f3169f628e3de734",
          "user": "67937d19217e50cd86cb44e4",
          "title": "Ritesh",
          "description": "Ritu don hu",
          "tag": "#bro",
          "date": "2025-02-06T16:17:54.287Z",
          "__v": 0
        },
        {
          "_id": "67a4e0d4f3169f628e3de737",
          "user": "67937d19217e50cd86cb44e4",
          "title": "Pappa",
          "description": "pappa ji bol pappaji",
          "tag": "#bro",
          "date": "2025-02-06T16:18:28.815Z",
          "__v": 0
        },
        {
          "_id": "67a4e0b2f3169f628e3de734",
          "user": "67937d19217e50cd86cb44e4",
          "title": "Ritesh",
          "description": "Ritu don hu",
          "tag": "#bro",
          "date": "2025-02-06T16:17:54.287Z",
          "__v": 0
        },
        {
          "_id": "67a4e0d4f3169f628e3de737",
          "user": "67937d19217e50cd86cb44e4",
          "title": "Pappa",
          "description": "pappa ji bol pappaji",
          "tag": "#bro",
          "date": "2025-02-06T16:18:28.815Z",
          "__v": 0
        }
      ]

      const [notes, setNotes] = useState(initaialNotes);

      return(
        <NoteContext.Provider value={{notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
      )

}

export default NoteState