import "./SortBy.css";

function SortBy(props) {
  const handleChange = (e) => {
    const newPosts = props.posts;
    if (e.target.value === "votes") {
      for (let i = 0; i < newPosts.length - 1; i += 1) {
        for (let j = i + 1; j < newPosts.length; j += 1) {
          if (newPosts[i].fields.votes > newPosts[j].fields.votes) {
            let temp = newPosts[i];
            newPosts[i] = newPosts[j];
            newPosts[j] = temp;
          }
        }
      }
      props.setPosts(newPosts);
    }
  };
  return (
    <form className="sort-button" onChange={(e) => console.log(e)}>
      <h3>Sort By</h3>
      <input type="radio" id="sort-votes" name="sort" value="votes" />
      <label htmlFor="sort-votes"> Votes</label>
      <br />
      <input type="radio" id="sort-time" name="sort" value="time" />
      <label htmlFor="sort-time"> Time</label>
      <br />
      <input type="radio" id="sort-username" name="sort" value="username" />
      <label htmlFor="sort-username"> Username</label>
    </form>
  );
}

export default SortBy;
