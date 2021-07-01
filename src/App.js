import { Route } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

import "./App.css";
import { basePostsURL, config } from "./services/index";
import axios from "axios";
import ViewPost from "./components/ViewPost";
import Welcome from "./components/Welcome";
import Home from "./components/Home";

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

  useEffect(() => {
    return () => {
      localStorage.clear();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/home">
        <Home posts={posts} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/view/:id">
        <ViewPost posts={posts} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
