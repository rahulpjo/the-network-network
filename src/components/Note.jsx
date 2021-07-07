import axios from "axios";
import { useEffect, useState } from "react";
import { baseNotesURL, config } from "../services";
import "./Note.css";

function Note(props) {
  const { note, setToggleFetch } = props;
  const [noteVotes, setNoteVotes] = useState(note.fields.votes);
  const [noteVoteValue, setNoteVoteValue] = useState(null);

  useEffect(() => {
    if (
      sessionStorage.favoriteNotes &&
      JSON.parse(sessionStorage.favoriteNotes).length &&
      JSON.parse(sessionStorage.favoriteNotes).filter(
        (favorite) => favorite === note.id
      ).length
    ) {
      setNoteVoteValue(true);
    }

    if (
      sessionStorage.dislikedNotes &&
      JSON.parse(sessionStorage.dislikedNotes).length &&
      JSON.parse(sessionStorage.dislikedNotes).filter(
        (disliked) => disliked === note.id
      ).length
    ) {
      setNoteVoteValue(false);
    }

    if (note.fields.votes !== noteVotes) {
      const addVotes = async () => {
        const url = `${baseNotesURL}/${note.id}`;
        const newVotes = {
          fields: {
            ...note.fields,
            votes: noteVotes,
          },
        };
        await axios.put(url, newVotes, config);
        setTimeout(() => {
          setToggleFetch((curr) => !curr);
        }, 500);
      };
      addVotes();
    }
  }, [note.id, note.fields, noteVotes, setToggleFetch]);

  const handleDownvote = () => {
    if (!noteVoteValue && noteVoteValue !== null) {
      setNoteVotes(noteVotes + 1);
      setNoteVoteValue(null);
      removeFromDisliked();
    } else if (noteVoteValue) {
      setNoteVotes(noteVotes - 2);
      setNoteVoteValue(false);
      removeFromFavorites();
      addToDisliked();
    } else {
      setNoteVotes(noteVotes - 1);
      setNoteVoteValue(false);
      addToDisliked();
    }
  };

  const handleUpvote = () => {
    if (noteVoteValue) {
      setNoteVotes(noteVotes - 1);
      setNoteVoteValue(null);
      removeFromFavorites();
    } else if (!noteVoteValue && noteVoteValue !== null) {
      setNoteVotes(noteVotes + 2);
      setNoteVoteValue(true);
      addToFavorites();
      removeFromDisliked();
    } else {
      setNoteVotes(noteVotes + 1);
      setNoteVoteValue(true);
      addToFavorites();
    }
  };

  const addToFavorites = () => {
    let newNote = note.id;
    if (!sessionStorage.favoriteNotes) {
      sessionStorage.setItem("favoriteNotes", JSON.stringify([newNote]));
    } else {
      let favoritesArray = JSON.parse(sessionStorage.favoriteNotes);
      favoritesArray.push(newNote);
      sessionStorage.setItem("favoriteNotes", JSON.stringify(favoritesArray));
    }
  };

  const addToDisliked = () => {
    let newNote = note.id;
    if (sessionStorage.getItem("dislikedNotes")) {
      let dislikedArray = JSON.parse(sessionStorage.dislikedNotes);
      dislikedArray.push(newNote);
      sessionStorage.setItem("dislikedNotes", JSON.stringify(dislikedArray));
    } else {
      sessionStorage.setItem("dislikedNotes", JSON.stringify([newNote]));
    }
  };

  const removeFromFavorites = () => {
    let favoritesArray = JSON.parse(sessionStorage.favoriteNotes);
    let newArray = favoritesArray.filter((favorite) => favorite !== note.id);
    sessionStorage.setItem("favoriteNotes", JSON.stringify(newArray));
  };

  const removeFromDisliked = () => {
    let dislikedArray = JSON.parse(sessionStorage.dislikedNotes);
    let newArray = dislikedArray.filter((disliked) => disliked !== note.id);
    sessionStorage.setItem("dislikedNotes", JSON.stringify(newArray));
  };

  return props.note ? (
    <article className="note">
      <div className="note-heading">
        <h4>{note.fields.username}</h4>
        <aside>
          <button
            className={noteVoteValue === false ? "selected" : null}
            onClick={handleDownvote}
          >
            &#9660;
          </button>
          <h5>{noteVotes}</h5>
          <button
            className={noteVoteValue ? "selected" : null}
            onClick={handleUpvote}
          >
            &#9650;
          </button>
        </aside>
      </div>
      <p>{note.fields.text}</p>
    </article>
  ) : (
    <h4>Loading...</h4>
  );
}

export default Note;
