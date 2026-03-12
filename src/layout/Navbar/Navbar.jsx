import React from "react"
import "./Navbar.css"

import logo from "../../assets/logo/logo.png"
import userImg from "../../assets/images/user.png"
import dropdownIcon from "../../assets/icons/dropdown.png"

function Navbar(){

  return(

    <header className="navbar">

      <div className="navbar-left">

        <img src={logo} alt="logo" className="logo"/>

      </div>

      <nav className="nav-links">

        <a className="active">Dashboard</a>
        <a>Courses</a>
        <a>Users</a>
        <a>Instructors</a>
        <a>Enrollments</a>
        <a>Assessments</a>

      </nav>

      <div className="navbar-right">

        <img src={userImg} alt="user" className="user-img"/>

        <span className="user-profile">
          Yashwanth
          <img src={dropdownIcon} alt="dropdown" width="12" />
        </span>

      </div>

    </header>

  )

}

export default Navbar