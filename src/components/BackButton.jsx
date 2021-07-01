import { useHistory } from "react-router-dom";
import "./BackButton.css";

function BackButton() {
  const history = useHistory();

  return (
    <button className="back-button" onClick={() => history.goBack()}>
      Go Back
    </button>
  );
}

export default BackButton;
