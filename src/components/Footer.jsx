import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <h4>Rahul Joshi © 2021</h4>
      <Link
        className="social-icon"
        to="https://www.facebook.com/profile.php?id=100004289202416"
      >
        <i className="fab fa-facebook"></i>
      </Link>
      <Link className="social-icon" to="https://www.instagram.com/rj900/">
        <i className="fab fa-instagram"></i>
      </Link>
      <Link
        className="social-icon"
        to="https://www.linkedin.com/in/rahul-joshi-00/"
      >
        <i className="fab fa-linkedin"></i>
      </Link>
      <Link className="social-icon" to="https://github.com/rahulpjo">
        <i className="fab fa-github"></i>
      </Link>
    </footer>
  );
}

export default Footer;
