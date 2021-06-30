import { useState } from "react";
import "./Note.css";

function Note(props) {
  const [noteVotes, setNoteVotes] = useState(props.note.fields.votes);
  const [downvote, setDownvote] = useState(false);
  const [upvote, setUpvote] = useState(false);

  const handleDownvote = () => {
    if (downvote) {
      setNoteVotes(noteVotes + 1);
      setDownvote(false);
    } else if (upvote) {
      setNoteVotes(noteVotes - 2);
      setUpvote(false);
      setDownvote(true);
    } else {
      setNoteVotes(noteVotes - 1);
      setDownvote(true);
    }
  };

  const handleUpvote = () => {
    if (upvote) {
      setNoteVotes(noteVotes - 1);
      setUpvote(false);
    } else if (downvote) {
      setNoteVotes(noteVotes + 2);
      setUpvote(true);
      setDownvote(false);
    } else {
      setNoteVotes(noteVotes + 1);
      setUpvote(true);
    }
  };

  return (
    <article className="note">
      <div className="note-heading">
        <h4>{props.note.fields.commentedBy}</h4>
        <aside>
          <button
            className={downvote ? "selected" : null}
            onClick={handleDownvote}
          >
            &#9660;
          </button>
          <h5>{noteVotes}</h5>
          <button className={upvote ? "selected" : null} onClick={handleUpvote}>
            &#9650;
          </button>
        </aside>
      </div>
      <p>{props.note.fields.text}</p>
    </article>
  );
}

export default Note;
