// import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router-dom";
// import { basePostsURL, config } from "../services";
import "./Post.css";

function Post(props) {
  const [votes, setVotes] = useState(props.post.fields.votes);
  const [downvote, setDownvote] = useState(false);
  const [upvote, setUpvote] = useState(false);
  const history = useHistory();

  // useEffect(() => {
  //   return () => {
  //     const addVotes = async () => {
  //       const url = `${basePostsURL}/${props.post.id}`;
  //       const newVotes = {
  //         fields: {
  //           ...props.post.fields,
  //           votes,
  //         },
  //       };
  //       await axios.put(url, newVotes, config);
  //     };
  //     addVotes();
  //   };
  // }, []);

  const handleDownvote = () => {
    if (downvote) {
      setVotes(votes + 1);
      setDownvote(false);
    } else if (upvote) {
      setVotes(votes - 2);
      setUpvote(false);
      setDownvote(true);
    } else {
      setVotes(votes - 1);
      setDownvote(true);
    }
  };

  const handleUpvote = () => {
    if (upvote) {
      setVotes(votes - 1);
      setUpvote(false);
    } else if (downvote) {
      setVotes(votes + 2);
      setUpvote(true);
      setDownvote(false);
    } else {
      setVotes(votes + 1);
      setUpvote(true);
    }
  };

  const handleSeeMore = () => {
    history.push(`/view/${props.post.id}`);
  };

  return (
    <article className="post">
      <div className="post-header">
        <h3>{props.post.fields.username}</h3>
        <aside>
          <button
            className={downvote ? "selected" : null}
            onClick={handleDownvote}
          >
            &#9660;
          </button>
          <h4>{votes > 0 ? `+${votes}` : votes}</h4>
          <button className={upvote ? "selected" : null} onClick={handleUpvote}>
            &#9650;
          </button>
        </aside>
      </div>
      <p>{props.post.fields.text}</p>
      <button onClick={handleSeeMore}>
        <h3>See more</h3>
      </button>
    </article>
  );
}

export default Post;
