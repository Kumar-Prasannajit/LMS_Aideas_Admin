import "./Sidebar.css"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

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

        {/* ACTIVE */}
        <div className="menu-item active">
          <span className="icon">▦</span>
          <span>Course Details</span>
        </div>

        {/* USERS */}
        <div className="menu-item" onClick={() => setOpenUsers(!openUsers)}>
          <span className="icon">≡</span>
          <span>Users</span>
          <span className="arrow">▾</span>
        </div>

        {openUsers && (
          <div className="submenu">
            <div className="submenu-item">
              <span className="icon small">👥</span>
              Imports Users
            </div>
            <div className="submenu-item">
              Manage User
            </div>
          </div>
        )}

        {/* OTHERS */}
        <div className="menu-item" onClick={() => setOpenOthers(!openOthers)}>
          <span className="icon">📊</span>
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