import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { basePostsURL, config } from "../services";
import "./Post.css";

function Post(props) {
  const [votes, setVotes] = useState(props.post.fields.votes);
  const [voteValue, setVoteValue] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const addVotes = async () => {
      const url = `${basePostsURL}/${props.post.id}`;
      const newVotes = {
        fields: {
          ...props.post.fields,
          votes,
        },
      };
      await axios.put(url, newVotes, config);
    };
    addVotes();
  }, []);

  const handleDownvote = () => {
    if (!voteValue && voteValue !== null) {
      setVotes(votes + 1);
      setVoteValue(null);
    } else if (voteValue) {
      setVotes(votes - 2);
      setVoteValue(false);
    } else {
      setVotes(votes - 1);
      setVoteValue(false);
    }
  };

  const handleUpvote = () => {
    if (voteValue) {
      setVotes(votes - 1);
      setVoteValue(null);
    } else if (!voteValue && voteValue !== null) {
      setVotes(votes + 2);
      setVoteValue(true);
    } else {
      setVotes(votes + 1);
      setVoteValue(true);
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
            className={!voteValue && voteValue !== null ? "selected" : null}
            onClick={handleDownvote}
          >
            &#9660;
          </button>
          <h4>{votes > 0 ? `+${votes}` : votes}</h4>
          <button
            className={voteValue && voteValue !== null ? "selected" : null}
            onClick={handleUpvote}
          >
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
