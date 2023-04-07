import { Link } from "react-router-dom";
import "./navigation.css";

export default function Navigation() {
  return (
    <nav className="nav">
      <div>icon</div>
      <ul>
        <li className="nav-item">
          <Link to={""}>Product</Link>
        </li>
        <li className="nav-item">
          <Link to={""}>something else here</Link>
        </li>
      </ul>
      <ul>
        <li>login</li>
      </ul>
    </nav>
  );
}
