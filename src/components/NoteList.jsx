import { useEffect, useState } from "react";
import { baseNotesURL, config } from "../services";
import axios from "axios";
import Note from "./Note";

function NoteList(props) {
  const [notes, setNotes] = useState([]);
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [note, setNote] = useState("");
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getNotes = async () => {
      const res = await axios.get(baseNotesURL, config);
      const results = res.data.records.filter(
        (currNote) => currNote.fields.commentFor[0] === props.id
      );
      setNotes(results);
    };

    getNotes();
  }, [toggleFetch, props.id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const addNote = async () => {
      const newNote = {
        fields: {
          username,
          text: note,
          votes: 0,
          commentFor: [props.post.id],
        },
      };
      setUsername("");
      setNote("");

      await axios.post(baseNotesURL, newNote, config);
      setToggleFetch(!toggleFetch);
      setShow(!show);
    };
    addNote();
  };

  return (
    <section className="post">
      <h3>Notes</h3>
      {notes.length ? (
        notes.map((postNote) => <Note key={postNote.id} note={postNote} />)
      ) : (
        <h4>No notes yet</h4>
      )}
      {show ? (
        <>
          <hr />
          <form className="note-form" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="note">New Note</label>
            <input
              type="text"
              id="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
            <button type="submit">
              <h4>Add</h4>
            </button>
          </form>
          <button onClick={() => setShow(!show)}>
            <h4>Cancel</h4>
          </button>
        </>
      ) : (
        <button onClick={() => setShow(!show)}>
          <h4>Add note</h4>
        </button>
      )}
    </section>
  );
}

export default NoteList;
