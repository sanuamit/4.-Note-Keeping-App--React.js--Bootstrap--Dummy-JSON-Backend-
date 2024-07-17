import React from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm"; 
import EditNoteForm from "./components/EditNoteForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Note Keeping App</h1>
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add" element={<AddNoteForm />} /> 
          <Route path="/edit/:id" element={<EditNoteForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
