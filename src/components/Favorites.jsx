import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import Post from "./Post";

function Favorites(props) {
  const [favoritesArray, setFavoritesArray] = useState([]);
  useEffect(() => {
    setFavoritesArray(
      props.posts.filter((post) =>
        JSON.parse(sessionStorage.getItem("favorites")).includes(post.id)
      )
    );
    console.log(props.posts);
  }, [props.posts]);
  return (
    <>
      <BackButton />
      <main>
        {favoritesArray.length ? (
          favoritesArray.map((favorite) => (
            <Post
              post={favorite}
              key={favorite.id}
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

export default Favorites;
