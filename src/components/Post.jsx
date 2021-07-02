import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { basePostsURL, config } from "../services";
import "./Post.css";

function Post(props) {
  const [votes, setVotes] = useState(props.post.fields.votes);
  const [voteValue, setVoteValue] = useState(null);
  const { post, setToggleFetch } = props;
  const history = useHistory();

  useEffect(() => {
    if (
      sessionStorage.favorites &&
      JSON.parse(sessionStorage.favorites).length &&
      JSON.parse(sessionStorage.favorites).filter(
        (favorite) => favorite.id === post.id
      ).length
    ) {
      setVoteValue(true);
    }

    if (
      sessionStorage.disliked &&
      JSON.parse(sessionStorage.disliked).length &&
      JSON.parse(sessionStorage.disliked).filter(
        (disliked) => disliked.id === post.id
      ).length
    ) {
      setVoteValue(false);
    }

    if (post.fields.votes !== votes) {
      const addVotes = async () => {
        const url = `${basePostsURL}/${post.id}`;
        const newVotes = {
          fields: {
            ...post.fields,
            votes,
          },
        };
        await axios.put(url, newVotes, config);
        setTimeout(() => {
          setToggleFetch((curr) => !curr);
        }, 500);
      };
      addVotes();
    }
  }, [post.id, post.fields, votes]);

  const handleDownvote = () => {
    if (!voteValue && voteValue !== null) {
      setVotes(votes + 1);
      setVoteValue(null);
      removeFromDisliked();
    } else if (voteValue) {
      setVotes(votes - 2);
      setVoteValue(false);
      removeFromFavorites();
      addToDisliked();
    } else {
      setVotes(votes - 1);
      setVoteValue(false);
      addToDisliked();
    }
  };

  const handleUpvote = () => {
    if (voteValue) {
      setVotes(votes - 1);
      setVoteValue(null);
      removeFromFavorites();
    } else if (!voteValue && voteValue !== null) {
      setVotes(votes + 2);
      setVoteValue(true);

      removeFromDisliked();
    } else {
      setVotes(votes + 1);
      setVoteValue(true);
      addToFavorites();
    }
  };

  const addToFavorites = () => {
    let newPost = props.post;
    newPost.fields.votes = votes;
    if (!sessionStorage.favorites) {
      sessionStorage.setItem("favorites", JSON.stringify([newPost]));
    } else {
      let favoritesArray = JSON.parse(sessionStorage.favorites);
      favoritesArray.push(newPost);
      sessionStorage.setItem("favorites", JSON.stringify(favoritesArray));
    }
  };

  const addToDisliked = () => {
    let newPost = props.post;
    newPost.fields.votes = votes;
    if (sessionStorage.getItem("disliked")) {
      let dislikedArray = JSON.parse(sessionStorage.disliked);
      dislikedArray.push(newPost);
      sessionStorage.setItem("disliked", JSON.stringify(dislikedArray));
    } else {
      sessionStorage.setItem("disliked", JSON.stringify([newPost]));
    }
  };

  const removeFromFavorites = () => {
    let favoritesArray = JSON.parse(sessionStorage.favorites);
    let newArray = favoritesArray.filter(
      (favorite) => favorite.id !== props.post.id
    );
    sessionStorage.setItem("favorites", JSON.stringify(newArray));
  };

  const removeFromDisliked = () => {
    let dislikedArray = JSON.parse(sessionStorage.disliked);
    let newArray = dislikedArray.filter(
      (disliked) => disliked.id !== props.post.id
    );
    sessionStorage.setItem("disliked", JSON.stringify(newArray));
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
