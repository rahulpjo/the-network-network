import { useEffect, useState } from "react";

import "./SortBy.css";

function SortBy(props) {
  const [sortType, setSortType] = useState("");
  const [sortPosts, setSortPosts] = useState([]);
  const { posts, setPosts } = props;
  useEffect(() => {
    setPosts(sortPosts);
  }, [sortPosts, setPosts]);

  useEffect(() => {
    const merge = (arrA, arrB) => {
      const newArray = [];

      while (arrA.length && arrB.length) {
        if (sortType === "votes") {
          if (arrA[0].fields.votes >= arrB[0].fields.votes) {
            newArray.push(arrA.shift());
          } else {
            newArray.push(arrB.shift());
          }
        }
        if (sortType === "username") {
          if (
            arrA[0].fields.username.localeCompare(arrB[0].fields.username) <= 0
          ) {
            newArray.push(arrA.shift());
          } else {
            newArray.push(arrB.shift());
          }
        }
        if (sortType === "time") {
          if (arrA[0].createdTime >= arrB[0].createdTime) {
            newArray.push(arrA.shift());
          } else {
            newArray.push(arrB.shift());
          }
        }
      }

      return [...newArray, ...arrA, ...arrB];
    };

    const mergeSort = (arr) => {
      console.log(sortType);
      if (arr.length === 1 || arr.length === 0) {
        return arr;
      }
      const mid = Math.floor(arr.length / 2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      return merge(mergeSort(left), mergeSort(right));
    };

    if (sortType) {
      setSortPosts(mergeSort(posts));
    }
  }, [sortType, posts]);

  return (
    <form className="sort-area">
      <h3>Sort By</h3>
      <select name="sort" onChange={(e) => setSortType(e.target.value)}>
        <option id="please-select" value="">
          -------------
        </option>
        <option id="sort-votes" value="votes">
          Votes
        </option>

        <option id="sort-time" value="time">
          Time
        </option>

        <option id="sort-username" value="username">
          Username
        </option>
      </select>
    </form>
  );
}

export default SortBy;
