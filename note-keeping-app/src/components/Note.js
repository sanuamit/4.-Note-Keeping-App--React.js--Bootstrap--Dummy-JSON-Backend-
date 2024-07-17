import React from "react";
import { Link } from "react-router-dom";

const Note = ({ note, onDelete }) => {
  const { id, title, content } = note;

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{content}</p>
        <Link to={`/edit/${id}`} className="btn btn-warning me-2">
          Edit
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Note;
