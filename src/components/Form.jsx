function Form(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <article className="selected-post">
      <section className="post">
        <h3>Create a New Post</h3>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" />
          <label htmlFor="text">Post Body</label>
          <input type="text" id="text" />
          <button type="submit">
            <h3>Submit</h3>
          </button>
        </form>
      </section>
    </article>
  );
}

export default Form;
