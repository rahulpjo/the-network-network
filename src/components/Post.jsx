import { useState } from "react";
import { Link } from "react-router-dom";

function Post(props) {
  const [votes, setVotes] = useState(props.post.fields.votes);
  const [downvote, setDownvote] = useState(false);
  const [upvote, setUpvote] = useState(false);

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

  return (
    <article className="post">
      <div className="post-header">
        <h3>{props.post.fields.postedBy}</h3>
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
      <button>
        <Link
          onClick={() => props.setSelectedPost(props.post)}
          to={`/view/${props.post.id}`}
        >
          <h3>See more</h3>
        </Link>
      </button>
    </article>
  );
}

export default Post;
