import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Form from "./components/Form";

import "./App.css";
import { basePostsURL, config } from "./services/index";
import axios from "axios";
import ViewPost from "./components/ViewPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(basePostsURL, config);
      setPosts(res.data.records);
    };

    getPosts();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path="/">
          {posts.length ? (
            posts.map((post) => <Post key={post.id} post={post} />)
          ) : (
            <h2>Loading...</h2>
          )}
        </Route>
        <Route path="/new">
          <Form setToggleFetch={setToggleFetch} />
        </Route>
        <Route path="/view/:id">
          <ViewPost posts={posts} />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
