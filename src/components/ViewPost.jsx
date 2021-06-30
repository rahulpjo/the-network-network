import { useEffect, useState } from "react";
import Note from "./Note";
function ViewPost(props) {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (props.selectedPost) {
      let dateValues = props.selectedPost.createdTime
        .toString()
        .slice(0, 10)
        .split("-");
      setDate(`${dateValues[1]}/${dateValues[2]}/${dateValues[0]}`);
      let timeValues = props.selectedPost.createdTime
        .toString()
        .slice(11, 16)
        .split(":");
      if (Number(timeValues[0]) >= 12) {
        setTime(`${Number(timeValues[0] % 12)}:${Number(timeValues[1])}PM`);
      } else if (Number(timeValues[0]) === 0) {
        setTime(`12:${Number(timeValues[1])}AM`);
      } else {
        setTime(`${Number(timeValues[0] % 12)}:${Number(timeValues[1])}AM`);
      }
    }
  }, [props.selectedPost]);

  return props.selectedPost.fields ? (
    <article className="selected-post">
      <section className="post">
        <h3>{props.selectedPost.fields.postedBy}</h3>
        <h5>{`${time} • ${date}`}</h5>
        <p>{props.selectedPost.fields.text}</p>
        <h4>{props.selectedPost.fields.votes} votes</h4>
      </section>
      <section className="post">
        <h3>
          Notes
          <i className="fab fa-plus"></i>
        </h3>
        {props.selectedPost.fields.comments.map((comment) => (
          <Note
            key={comment}
            note={props.notes.find((note) => note.id === comment.toString())}
          />
        ))}
      </section>
    </article>
  ) : (
    <h2>Loading...</h2>
  );
}

export default ViewPost;
