import React from "react";

function Note(props) {
  return (
    <div className="note" id={props.id}>
      <button className="noteBtn" onClick={() => props.deleteNote(props.id)}>
        x
      </button>
      <h1 id="note-title">{props.title}</h1>
      <p id="note-content">{props.content}</p>
    </div>
  );
}

export default Note;
