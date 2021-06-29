import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <h1>TNN</h1>
      <div className="full-header">
        <h2>
          <span>T</span>he
        </h2>
        <h2>
          <span>N</span>etwork
        </h2>
        <h2>
          <span>N</span>etwork
        </h2>
      </div>
      <nav>
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/new">
          New
        </Link>
      </nav>
    </header>
  );
}

export default Header;
