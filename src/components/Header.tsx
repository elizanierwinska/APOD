import "./Header.css";
import { NavLink , Link } from "react-router-dom";

export default function Header() {
  return <div className="header-container">
    <Link to="/">
      <h1 className="page-title">Astronomy Picture of the Day</h1>
      <h1 className="small-screen-title">APOD</h1>
    </Link>
    <NavLink className="gallery-link" to="/gallery">
      <p>See gallery</p>
    </NavLink>
  </div>
}