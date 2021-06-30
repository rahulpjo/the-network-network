import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseNotesURL, config } from "../services";
import Note from "./Note";
import "./ViewPost.css";

function ViewPost(props) {
  const params = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [show, setShow] = useState(false);
  const [username, setUsername] = useState("");
  const [note, setNote] = useState("");
  const [toggleFetch, setToggleFetch] = useState(true);

  const [notes, setNotes] = useState([]);
  const [post, setPost] = useState({});

  useEffect(() => {
    if (props.posts.length) {
      let selectedPost = props.posts.find(
        (postCheck) => postCheck.id === params.id
      );

      setPost(selectedPost);
      timePosted(selectedPost);
    }

    const getNotes = async () => {
      const res = await axios.get(baseNotesURL, config);
      const results = res.data.records.filter(
        (currNote) => currNote.fields.commentFor[0] === params.id
      );
      setNotes(results);
    };

    getNotes();
  }, [params.id, props.posts, toggleFetch]);

  const timePosted = (currPost) => {
    if (currPost) {
      let dateValues = currPost.createdTime.toString().slice(0, 10).split("-");
      setDate(`${dateValues[1]}/${dateValues[2]}/${dateValues[0]}`);
      let timeValues = currPost.createdTime.toString().slice(11, 16).split(":");
      if (Number(timeValues[0]) >= 12) {
        setTime(`${Number(timeValues[0] % 12)}:${Number(timeValues[1])}PM`);
      } else if (Number(timeValues[0]) === 0) {
        setTime(`12:${Number(timeValues[1])}AM`);
      } else {
        setTime(`${Number(timeValues[0] % 12)}:${Number(timeValues[1])}AM`);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const addNote = async () => {
      const newNote = {
        fields: {
          username,
          text: note,
          votes: 0,
          commentFor: [post.id],
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

  return post.fields ? (
    <article className="selected-post">
      <section className="post">
        <h3>{post.fields.username}</h3>
        <h5>{`${time} • ${date}`}</h5>
        <p>{post.fields.text}</p>
        <h4>{post.fields.votes} votes</h4>
      </section>
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
    </article>
  ) : (
    <h2>Loading...</h2>
  );
}

export default ViewPost;
