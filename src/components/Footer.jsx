import "./Footer.css";

function Footer() {
  return (
    <footer>
      <h4>Rahul Joshi © 2021</h4>
      <a
        className="social-icon"
        href="https://www.facebook.com/profile.php?id=100004289202416"
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a className="social-icon" href="https://www.instagram.com/rj900/">
        <i className="fab fa-instagram"></i>
      </a>
      <a
        className="social-icon"
        href="https://www.linkedin.com/in/rahul-joshi-00/"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a className="social-icon" href="https://github.com/rahulpjo">
        <i className="fab fa-github"></i>
      </a>
    </footer>
  );
}

export default Footer;
