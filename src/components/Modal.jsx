import React from "react";

function Modal(props) {
  const [note, setNote] = React.useState({
    noteTitle: "",
    noteCont: ""
  });

  function handleChange(event) {
    const newValue = event.target.value;
    const name = event.target.name;
    setNote((prevState) => {
      return { ...prevState, [name]: newValue };
    });
  }

  function handleClick() {
    props.setNotesItems((prevItems) => [...prevItems, note]);
    setNote({
      noteTitle: "",
      noteCont: ""
    });
  }

  return (
    <div id="overlay">
      <div id="modalContainer">
        <button
          className="modalClose"
          onClick={() => props.setIsVisible(false)}
        >
          x
        </button>
        <div id="modalContent">
          <h3 className="modalText">Add Note Title:</h3>
          <input
            onChange={handleChange}
            value={note.noteTitle}
            name="noteTitle"
            type="text"
            className="modalInput"
          />
          <h3 className="modalText">Add Note Content:</h3>
          <textarea
            onChange={handleChange}
            value={note.noteCont}
            name="noteCont"
            className="modalTextArea modalInput"
            cols="50"
            rows="7"
          />
          <br />
          <button className="modalAdd" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
