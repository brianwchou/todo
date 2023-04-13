import { Link } from "react-router-dom";
import logoUrl from "../../assets/logo.jpeg";
import "./LandingPage.css";

const imgStyle = {
  height: "40px",
  width: "40px",
  borderRadius: 30,
  verticalAlign: "middle",
};

const ulStyle = {};

export default function LandingPage() {
  return (
    <>
      <nav className="navbar">
        <div>
          <a href="#">
            <img style={imgStyle} src={logoUrl} />
          </a>
          Todo app
        </div>
        <div>
          <ul style={ulStyle}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
            <li>
              <Link to={"/signup"}>Sign Up</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <h1>TODO App</h1>
        <h3>Creative Design</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          aspernatur, dicta error eius odit expedita nobis ad autem.
          Consequuntur sunt quam saepe, vitae sit a fugiat quaerat fugit odit!
          Facere!
        </p>

        <button> try now </button>
        <button> contact us </button>
      </div>
      <div>hero image</div>
    </>
  );
}
