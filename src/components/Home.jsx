import axios from "axios";
import { useEffect, useState } from "react";
import { basePostsURL, config } from "../services";
import Post from "./Post";
import SortBy from "./SortBy";
import "./Home.css";

function Home(props) {
  const [username, setUsername] = useState("");
  const { posts, setPosts, toggleFetch, setToggleFetch } = props;
  useEffect(() => {
    setUsername(sessionStorage.username);
  }, []);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(basePostsURL, config);
      setPosts(res.data.records);
    };

    getPosts();
  }, [toggleFetch, setPosts]);

  return (
    <div className="main-area">
      <h2>Hello {username}!</h2>
      <SortBy posts={posts} setPosts={setPosts} />
      <main id="home">
        {posts.length ? (
          posts.map((post) => (
            <Post key={post.id} post={post} setToggleFetch={setToggleFetch} />
          ))
        ) : (
          <h2>Loading...</h2>
        )}
      </main>
    </div>
  );
}

export default Home;
