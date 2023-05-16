import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import Modal from "./Modal";

function App() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [notesItems, setNotesItems] = React.useState([]);

  function deleteNote(id) {
    setNotesItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return id !== index;
      });
    });
  }

  return (
    <div>
      <Header setIsVisible={setIsVisible} />
      {notesItems.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.noteTitle}
          content={note.noteCont}
          deleteNote={deleteNote}
        />
      ))}
      {isVisible && (
        <Modal setNotesItems={setNotesItems} setIsVisible={setIsVisible} />
      )}
      <Footer />
    </div>
  );
}

export default App;
