import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo.jpeg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#">
          <img className="logo" src={logoUrl} />
        </a>
        <span>Todo app</span>
      </div>
      <div className="links-container">
        <ul className="information">
          <li>
            <Link to={"/"}>How it works</Link>
          </li>
          <li>
            <Link to={"/"}>Pricing</Link>
          </li>
          <li>
            <Link to={"/"}>Blog</Link>
          </li>
          <li>
            <Link to={"/"}>Docs</Link>
          </li>
        </ul>
        <ul className="authentication">
          <li>
            <Link to={"/login"}>Login</Link>
          </li>
          <li>
            <Link to={"/signup"}>Sign Up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
