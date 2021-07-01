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
    if (
      localStorage.favorites &&
      JSON.parse(localStorage.favorites).filter(
        (favorite) => favorite.id === props.post.id
      ).length
    ) {
      setVoteValue(true);
    }

    if (
      localStorage.disliked &&
      JSON.parse(localStorage.disliked).filter(
        (disliked) => disliked.id === props.post.id
      ).length
    ) {
      setVoteValue(false);
    }
  }, [props.post.id]);

  const addVotes = async () => {
    const url = `${basePostsURL}/${props.post.id}`;
    const newVotes = {
      fields: {
        ...props.post.fields,
        votes,
      },
    };
    await axios.put(url, newVotes, config);
    setTimeout(() => {
      props.setToggleFetch((curr) => !curr);
    }, 500);
  };

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
    addVotes();
  };

  const handleUpvote = () => {
    if (voteValue) {
      setVotes(votes - 1);
      setVoteValue(null);
      removeFromFavorites();
    } else if (!voteValue && voteValue !== null) {
      setVotes(votes + 2);
      setVoteValue(true);
      addToFavorites();
      removeFromDisliked();
    } else {
      setVotes(votes + 1);
      setVoteValue(true);
      addToFavorites();
    }
    addVotes();
  };

  const addToFavorites = () => {
    if (localStorage.length < 2) {
      localStorage.setItem("favorites", JSON.stringify([props.post]));
      console.log(JSON.parse(localStorage.getItem("favorites")));
    } else {
      console.log(localStorage.favorites);
      let favoritesArray = JSON.parse(localStorage.favorites);
      favoritesArray.push(props.post);
      localStorage.setItem("favorites", JSON.stringify(favoritesArray));
      console.log(JSON.parse(localStorage.getItem("favorites")));
    }
    console.log(localStorage);
  };

  const addToDisliked = () => {
    if (localStorage.getItem("disliked")) {
      console.log(localStorage.disliked);
      let dislikedArray = JSON.parse(localStorage.disliked);
      dislikedArray.push(props.post);
      localStorage.setItem("disliked", JSON.stringify(dislikedArray));
      console.log(JSON.parse(localStorage.getItem("disliked")));
    } else {
      localStorage.setItem("disliked", JSON.stringify([props.post]));
      console.log(JSON.parse(localStorage.getItem("disliked")));
    }
    console.log(localStorage);
  };

  const removeFromFavorites = () => {
    let favoritesArray = JSON.parse(localStorage.favorites);
    let newArray = favoritesArray.filter(
      (favorite) => favorite.id !== props.post.id
    );
    localStorage.setItem("favorites", JSON.stringify(newArray));
    console.log(JSON.parse(localStorage.getItem("favorites")));
  };

  const removeFromDisliked = () => {
    let dislikedArray = JSON.parse(localStorage.disliked);
    let newArray = dislikedArray.filter(
      (disliked) => disliked.id !== props.post.id
    );
    localStorage.setItem("disliked", JSON.stringify(newArray));
    console.log(JSON.parse(localStorage.getItem("disliked")));
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
