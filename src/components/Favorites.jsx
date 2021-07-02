import { useEffect } from "react";
import BackButton from "./BackButton";
import Post from "./Post";

function Favorites(props) {
  const { setToggleFetch } = props;
  useEffect(() => {
    setToggleFetch((curr) => !curr);
  }, [setToggleFetch]);
  return (
    <>
      <BackButton />
      <main>
        {sessionStorage.favorites ? (
          JSON.parse(sessionStorage.favorites).map((favorite) => (
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
