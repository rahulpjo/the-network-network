import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Post from "./components/Post";
import Form from "./components/Form";

import "./App.css";
import { basePostsURL, config } from "./services/index";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getPosts = async () => {
      const res = await axios.get(basePostsURL, config);
      console.log(res.data);
      setPosts(res.data);
    };
    getPosts();
  }, []);
  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        {posts.map((post) => (
          <Post />
        ))}
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
