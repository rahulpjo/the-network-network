import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Form from "./components/Form";

import "./App.css";
import { baseNotesURL, basePostsURL, config } from "./services/index";
import axios from "axios";
import ViewPost from "./components/ViewPost";

function App() {
  const [posts, setPosts] = useState([]);
  const [notes, setNotes] = useState([]);
  const [selectedPost, setSelectedPost] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(basePostsURL, config);
      setPosts(res.data.records);
    };
    const getNotes = async () => {
      const res = await axios.get(baseNotesURL, config);
      setNotes(res.data.records);
    };
    getPosts();
    getNotes();
  }, []);
  return (
    <div className="App">
      <Header />
      <main>
        <Route exact path="/">
          {posts.length ? (
            posts.map((post) => (
              <Post
                key={post.id}
                post={post}
                setSelectedPost={setSelectedPost}
              />
            ))
          ) : (
            <h2>Loading...</h2>
          )}
        </Route>
        <Route path="/new">
          <Form />
        </Route>
        <Route path="/view/:id">
          <ViewPost selectedPost={selectedPost} notes={notes} />
        </Route>
      </main>
      <Footer />
    </div>
  );
}

export default App;
