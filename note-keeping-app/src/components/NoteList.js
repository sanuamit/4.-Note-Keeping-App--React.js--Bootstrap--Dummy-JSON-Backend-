import React, { useState, useEffect } from "react";
import Note from "./Note";
import { Link } from "react-router-dom";

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const response = await fetch("http://localhost:5000/notes");
      const data = await response.json();
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/notes/${id}`, {
        method: "DELETE",
      });
      fetchNotes(); 
    } catch (error) {
      console.error("Error deleting note:", error);
    }
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="me-auto">For add notes click the "Add Note" button</span>
        <Link to="/add" className="btn btn-success">
          Add Note
        </Link>
      </div>
      {notes.map((note) => (
        <Note key={note.id} note={note} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default NoteList;
