import "./Courses.css"

import { useState } from "react"
import { courses } from "../../data/courseData.js"

import CourseCard from "../../components/courses/CourseCard/CourseCard.jsx"
import CourseListItem from "../../components/courses/CourseList/CourseList.jsx"
import AdminLayout from "../../layout/AdminLayout/AdminLayout.jsx"

function Courses() {

  const [view, setView] = useState("grid")

  return (

    <AdminLayout>

      <div className="courses-container">

        <div className="courses-header">

          <h2>All Courses</h2>

          <button className="add-btn">+ Add Course</button>

        </div>

        <div className="courses-controls">
          {/* Left Child: Search Only */}
          <div className="controls-left">
            <div className="search-container">
              <svg className="search-icon" width="20" height="20" viewBox="0 0 20 20">
                <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
              </svg>
              <input className="search-input" placeholder="search courses..." />
            </div>
          </div>

          {/* Right Child: Filter and View Toggle */}
          <div className="controls-right">
            <div className="filter-pill">
              <div className="filter-left">
                <svg className="icon-filter" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span className="filter-text">All Status</span>
              </div>
              <svg className="icon-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            <div className="view-toggle-pill">
              <div className={`toggle-item ${view === 'grid' ? 'active' : ''}`} onClick={() => setView("grid")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className={`toggle-item ${view === 'list' ? 'active' : ''}`} onClick={() => setView("list")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                  <line x1="3" y1="24" x2="21" y2="24" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className={view === "grid" ? "grid-view" : "list-view"}>

          {courses.map(course => (
            view === "grid"
              ? <CourseCard key={course.id} course={course} />
              : <CourseListItem key={course.id} course={course} />
          ))}

        </div>

      </div>

    </AdminLayout>

  )

}

export default Courses