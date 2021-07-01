import { useEffect, useState } from "react";
import Post from "./Post";

function Home(props) {
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(localStorage.username);
  }, []);

  return (
    <>
      <h2>Hello {username}!</h2>
      <main>
        {props.posts.length ? (
          props.posts.map((post) => (
            <Post
              key={post.id}
              post={post}
              setToggleFetch={props.setToggleFetch}
            />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
    </>
  );
}

export default Home;
