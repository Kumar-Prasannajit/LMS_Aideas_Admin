import { useState } from "react"
import { courses } from "../../data/courseData.js"

import CourseCard from "../../components/courses/CourseCard/CourseCard.jsx"
import AdminLayout from "../../layout/AdminLayout/AdminLayout.jsx"

function Courses() {

  const [view, setView] = useState("grid")

  return (

    <AdminLayout>

      <div className="bg-white p-[20px] rounded-[20px]">

        <div className="flex justify-between items-center">
          <h2>All Courses</h2>
          <button className="flex items-center gap-[8px] bg-black text-white px-[20px] py-[10px] rounded-[12px] font-semibold text-[15px] border-none cursor-pointer hover:opacity-85 transition-opacity duration-200 [&>svg]:shrink-0">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
              <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span>Add Course</span>
          </button>
        </div>

        <div className="flex items-center justify-between w-full py-[10px]">

          <div className="flex-1 max-w-[400px]">
            <div className="w-[25vw] relative flex items-center">
              <svg className="absolute left-[10px] fill-[#888] pointer-events-none" width="20" height="20" viewBox="0 0 20 20">
                <path d="M17.545 15.467l-3.779-3.779a6.15 6.15 0 0 0 .898-3.21c0-3.417-2.961-6.377-6.378-6.377A6.185 6.185 0 0 0 2.1 8.287c0 3.416 2.961 6.377 6.377 6.377a6.15 6.15 0 0 0 3.115-.844l3.799 3.801a.953.953 0 0 0 1.346 0l.943-.943c.371-.371.236-.84-.135-1.211zM4.004 8.287a4.282 4.282 0 0 1 4.282-4.283c2.366 0 4.474 2.107 4.474 4.474a4.284 4.284 0 0 1-4.283 4.283c-2.366-.001-4.473-2.109-4.473-4.474z" />
              </svg>
              <input className="w-full py-[10px] pr-[10px] pl-[35px] border border-[#ccc] rounded-[50px] text-[16px] focus:outline-none focus:border-[#007bff]" placeholder="search courses..." />
            </div>
          </div>


          <div className="flex items-center gap-[15px]">
            <div className="ml-[10vw] flex items-center justify-between px-[16px] py-[8px] bg-white border border-[#e0e0e0] rounded-[50px] min-w-[160px] cursor-pointer hover:border-[#bdbdbd] transition-colors duration-200">
              <div className="flex items-center gap-[12px]">
                <svg className="text-[#757575]" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
                <span className="text-[#757575] text-[14px] font-sans select-none">All Status</span>
              </div>
              <svg className="text-[#9e9e9e] ml-[10px]" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </div>

            <div className="inline-flex bg-white border border-[#e0e0e0] rounded-[50px] overflow-hidden cursor-pointer">
              <div className={`flex items-center justify-center px-[16px] py-[8px] transition-colors duration-200 relative border-r border-[#eee] ${view === 'grid' ? 'bg-[#e8e8e8] [&>svg]:text-black' : '[&>svg]:text-[#555]'}`} onClick={() => setView("grid")}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <div className={`flex items-center justify-center px-[16px] py-[8px] transition-colors duration-200 relative ${view === 'list' ? 'bg-[#e8e8e8] [&>svg]:text-black' : '[&>svg]:text-[#555]'}`} onClick={() => setView("list")}>
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

        <div className={view === "grid" ? "grid grid-cols-3 gap-[20px]" : "flex flex-col gap-[15px]"}>

          {courses.map(course => (
            <CourseCard key={course.id} course={course} view={view} />
          ))}

        </div>

      </div>

    </AdminLayout>

  )

}

export default Courses