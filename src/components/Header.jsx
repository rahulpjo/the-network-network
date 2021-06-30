import { NavLink } from "react-router-dom";
import "./Header.css";

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
        {/* Implemented NavLinks so I could use the activeClassName attribute. 
        Source: https://reactrouter.com/web/api/NavLink */}
        <NavLink activeClassName="active" className="nav-link" exact to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="nav-link" to="/new">
          New
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
