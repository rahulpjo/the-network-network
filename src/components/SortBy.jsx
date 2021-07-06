import { useState } from "react";
import "./SortBy.css";

function SortBy(props) {
  const [type, setType] = useState("");
  const merge = (arrA, arrB) => {
    const newArray = [];
    while (arrA.length && arrB.length) {
      if (arrA[0].fields.votes >= arrB[0].fields.votes) {
        newArray.push(arrA.shift());
      } else {
        newArray.push(arrB.shift());
      }
      // if (type === "username") {
      //   if (
      //     arrA[0].fields.username.localeCompare(arrB[0].fields.username) === 1
      //   ) {
      //     newArray.push(arrA.shift());
      //   } else {
      //     newArray.push(arrB.shift());
      //   }
      // }
      // if (type === "time") {
      //   if (arrA[0].createdTime > arrB[0].createdTime) {
      //     newArray.push(arrA.shift());
      //   } else {
      //     newArray.push(arrB.shift());
      //   }
      // }
    }
    return [...newArray, ...arrA, ...arrB];
  };

  const mergeSort = (arr) => {
    if (arr.length === 1 || arr.length === 0) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    return merge(mergeSort(left), mergeSort(right));
  };

  const handleChange = (e) => {
    const newPosts = props.posts;
    const val = e.target.value;
    setType(val);
    setTimeout(() => {
      console.log(type);
    }, 500);
    console.log(val);
    props.setPosts([]);
    props.setPosts(mergeSort(newPosts));
  };
  return (
    <form className="sort-button" onChange={handleChange}>
      <h3>Sort By</h3>
      <input type="radio" id="sort-votes" name="sort" value="votes" />
      <label htmlFor="sort-votes"> Votes</label>
      <br />
      <input type="radio" id="sort-time" name="sort" value="time" />
      <label htmlFor="sort-time"> Time</label>
      <br />
      <input type="radio" id="sort-username" name="sort" value="username" />
      <label htmlFor="sort-username"> Username</label>
    </form>
  );
}

export default SortBy;
