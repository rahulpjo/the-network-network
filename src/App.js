import { Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Form from "./components/Form";

import "./App.css";
import ViewPost from "./components/ViewPost";
import Welcome from "./components/Welcome";
import Home from "./components/Home";
import Favorites from "./components/Favorites";

function App() {
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Welcome />
      </Route>
      <Route path="/home">
        <Home
          posts={posts}
          setPosts={setPosts}
          toggleFetch={toggleFetch}
          setToggleFetch={setToggleFetch}
        />
      </Route>
      <Route path="/new">
        <Form setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/view/:id">
        <ViewPost posts={posts} />
      </Route>
      <Route path="/favorites">
        <Favorites setToggleFetch={setToggleFetch} posts={posts} />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
