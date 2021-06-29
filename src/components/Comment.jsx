function Comment(props) {
  console.log(props.note);

  return (
    <article className="comment">
      <div className="comment-heading">
        <h4>{props.note.fields.commentedBy}</h4>
        <aside>
          <button>&#9660;</button>
          <h5>{props.note.fields.votes}</h5>
          <button>&#9650;</button>
        </aside>
      </div>
      <p>{props.note.fields.text}</p>
    </article>
  );
}

export default Comment;
