import "./Header.css"
import { NavLink } from "react-router-dom";

export default function Header() {
  return <div className="header-container">
    <h1 className="page-title">Astronomy Picture of the Day</h1>
    <h1 className="small-screen-title">APOD</h1>
    <NavLink className="button" to="/gallery">
      <p>See gallery</p>
    </NavLink>
  </div>
}