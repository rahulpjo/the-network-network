import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Welcome() {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push("/home");
  };

  useEffect(() => {
    sessionStorage.setItem("username", username);
  }, [username]);

  return (
    <div className="entry">
      <img
        className="welcome-logo"
        src="TNNLogo.svg"
        alt="The Network Network Logo"
      />
      <h2>Welcome to The Network Network!</h2>
      <h3>Enter a username for your session:</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">GO!</button>
      </form>
    </div>
  );
}

export default Welcome;
