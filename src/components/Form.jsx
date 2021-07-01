import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { basePostsURL, config } from "../services";
import BackButton from "./BackButton";
import "./Form.css";

function Form(props) {
  const [username, setUsername] = useState(localStorage.username);
  const [text, setText] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const addPost = async () => {
      const newPost = {
        fields: {
          text,
          username,
          votes: 0,
          notes: [],
        },
      };
      await axios.post(basePostsURL, newPost, config);
      props.setToggleFetch((curr) => !curr);
      setTimeout(() => {
        history.push("/");
      }, 500);
    };
    addPost();
  };

  return (
    <>
      <BackButton />
      <main>
        <section className="form">
          <h3>Create a New Post</h3>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="text">Post Body</label>
            <textarea
              type="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <button type="submit">
              <h4>Submit</h4>
            </button>
          </form>
        </section>
      </main>
    </>
  );
}

export default Form;
