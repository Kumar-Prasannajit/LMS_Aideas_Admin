import { NavLink } from "react-router-dom"

import logo from "../../assets/logo/logo.png"
import userImg from "../../assets/images/user.png"
import dropdownIcon from "../../assets/icons/dropdown.png"

function Navbar() {
  const linkClass = ({ isActive }) =>
    `relative font-medium text-[16px] cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:-bottom-[6px] after:h-[3px] after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${
      isActive ? "text-primary after:w-full" : "text-[#242424] after:w-0"
    }`

  return (
    <header className="h-[70px] flex items-center justify-between px-[100px] py-[10px] bg-white border-b border-[#eee]">
      <div className="flex items-center">
        <img src={logo} alt="logo" className="h-[80px]" />
      </div>

      <nav className="flex gap-[30px]">
        <NavLink to="/" end className={linkClass}>
          Dashboard
        </NavLink>

        <NavLink to="/courses" className={linkClass}>
          Courses
        </NavLink>

        <NavLink to="/users" className={linkClass}>
          Users
        </NavLink>

        <NavLink to="/instructors" className={linkClass}>
          Instructors
        </NavLink>

        <NavLink to="/enrollments" className={linkClass}>
          Enrollments
        </NavLink>

        <NavLink to="/assessments" className={linkClass}>
          Assessments
        </NavLink>
      </nav>

      <div className="flex items-center gap-[10px]">
        <img src={userImg} alt="user" className="w-[45px] h-[45px] rounded-full" />

        <span className="flex items-center gap-[8px] cursor-pointer font-medium text-[16px]">
          Yashwanth
          <img src={dropdownIcon} alt="dropdown" className="w-[12px]" />
        </span>
      </div>
    </header>
  )
}

export default Navbar