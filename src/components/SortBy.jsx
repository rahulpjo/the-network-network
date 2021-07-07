import { useEffect, useState } from "react";

import "./SortBy.css";

function SortBy(props) {
  const [sortType, setSortType] = useState("");
  const [sortBool, setSortBool] = useState(false);
  const { posts, setSortPosts } = props;

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
  // eslint-disable-next-line
  const mergeSort = (arr) => {
    let mergeArray = [...arr];
    if (mergeArray.length === 1 || mergeArray.length === 0) {
      return mergeArray;
    }
    const mid = Math.floor(mergeArray.length / 2);
    const left = mergeArray.slice(0, mid);
    const right = mergeArray.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };

  const handleChange = (e) => {
    setSortType(e.target.value);
    setSortBool(true);
  };

  useEffect(() => {
    if (sortBool) {
      const arr = [...posts];
      let newArray = mergeSort(arr);
      setSortPosts(newArray);
      setSortBool(false);
    }
  }, [sortBool, posts, setSortPosts, mergeSort]);

  return (
    <form className="sort-area">
      <h3>Sort By</h3>
      <select name="sort" value={sortType} onChange={handleChange}>
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
