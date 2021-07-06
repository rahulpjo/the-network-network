import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import NoteList from "./NoteList";
import "./ViewPost.css";

function ViewPost(props) {
  const params = useParams();

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [post, setPost] = useState({});

  useEffect(() => {
    if (props.posts.length) {
      let selectedPost = props.posts.find(
        (postCheck) => postCheck.id === params.id
      );

      setPost(selectedPost);
      timePosted(selectedPost);
    }
  }, [params.id, props.posts]);

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

  return post.fields ? (
    <>
      <main id="view-post">
        <BackButton />
        <article className="selected-post">
          <section className="post">
            <h3>{post.fields.username}</h3>
            <h5>{`${time} • ${date}`}</h5>
            <p>{post.fields.text}</p>
            <h4>{post.fields.votes} votes</h4>
          </section>
          <NoteList id={params.id} post={post} />
        </article>
      </main>
    </>
  ) : (
    <h2>Loading...</h2>
  );
}

export default ViewPost;
