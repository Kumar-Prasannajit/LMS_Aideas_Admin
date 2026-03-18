import "./Sidebar.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import usersIcon from "../../../assets/icons/course.png"

function Sidebar() {

  const navigate = useNavigate()
  const [openUsers, setOpenUsers] = useState(true)
  const [openOthers, setOpenOthers] = useState(true)

  return (
    <div className="sidebar">

      <div className="back-wrapper">
        <button className="back-btn" onClick={() => navigate("/courses")}>
          ← Back
        </button>
      </div>

      <div className="menu">

        
        <div className="menu-item active">
          <span className="icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
            </svg>
          </span>
          <span>Course Details</span>
        </div>

        <div className="menu-item" onClick={() => setOpenUsers(!openUsers)}>
          <span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line><line x1="3" y1="24" x2="21" y2="24"></line></svg></span>
          <span>Users</span>
          <span className={`arrow ${openUsers ? "open" : ""}`}>▾</span>
        </div>

        {openUsers && (
          <div className="submenu">
            <div className="submenu-item">
              <span className="icon small"><img src={usersIcon} /></span>
              Imports Users
            </div>

            <div className="submenu-item">
              Manage User
            </div>
          </div>
        )}

        <div className="menu-item" onClick={() => setOpenOthers(!openOthers)}>
          <span className="icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19L12 11" stroke="#000000" stroke-width="4" stroke-linecap="round"></path> <path d="M7 19L7 15" stroke="#000000" stroke-width="4" stroke-linecap="round"></path> <path d="M17 19V6" stroke="#000000" stroke-width="4" stroke-linecap="round"></path> </svg></span>
          <span>Others</span>
          <span className="arrow">▾</span>
        </div>

        {openOthers && (
          <div className="submenu">
            <div className="submenu-item">
              File Upload
            </div>
          </div>
        )}

      </div>

    </div>
  )
}

export default Sidebar