import "./Navbar.css"
import { NavLink } from "react-router-dom"

import logo from "../../assets/logo/logo.png"
import userImg from "../../assets/images/user.png"
import dropdownIcon from "../../assets/icons/dropdown.png"

function Navbar() {

  return (

    <header className="navbar">

      <div className="navbar-left">
        <img src={logo} alt="logo" className="logo" />
      </div>

      <nav className="nav-links">

        <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>
          Dashboard
        </NavLink>

        <NavLink to="/courses" className={({ isActive }) => isActive ? "active" : ""}>
          Courses
        </NavLink>

        <NavLink to="/users" className={({ isActive }) => isActive ? "active" : ""}>
          Users
        </NavLink>

        <NavLink to="/instructors" className={({ isActive }) => isActive ? "active" : ""}>
          Instructors
        </NavLink>

        <NavLink to="/enrollments" className={({ isActive }) => isActive ? "active" : ""}>
          Enrollments
        </NavLink>

        <NavLink to="/assessments" className={({ isActive }) => isActive ? "active" : ""}>
          Assessments
        </NavLink>

      </nav>

      <div className="navbar-right">

        <img src={userImg} alt="user" className="user-img" />

        <span className="user-profile">
          Yashwanth
          <img src={dropdownIcon} alt="dropdown" width="12" />
        </span>

      </div>

    </header>

  )

}

export default Navbar