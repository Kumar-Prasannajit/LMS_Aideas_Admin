import { useNavigate } from "react-router-dom"
import { useState } from "react"
import usersIcon from "../../../assets/icons/course.png"

function Sidebar() {

  const navigate = useNavigate()
  const [openUsers, setOpenUsers] = useState(true)
  const [openOthers, setOpenOthers] = useState(true)

  return (
    <div className="h-[calc(100vh-100px)] flex flex-col pb-[170px]">

      <div className="flex justify-center mb-[18px]">
        <button className="bg-white border border-[#e5e5e5] rounded-full px-[16px] py-[6px] text-[13px] cursor-pointer text-[#444] shadow-[0_2px_6px_rgba(0,0,0,0.05)]" onClick={() => navigate("/courses")}>
          ← Back
        </button>
      </div>

      <div className="flex flex-col gap-[4px]">

        
        <div className="flex items-center gap-[12px] px-[14px] py-[12px] rounded-[10px] text-[14px] font-medium cursor-pointer bg-[#e6efff] text-[#0068a8]">
          <span className="w-[20px] h-[20px] flex items-center justify-center [&>svg]:w-[18px] [&>svg]:h-[18px]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <rect x="3" y="3" width="7" height="7" rx="2" />
              <rect x="14" y="3" width="7" height="7" rx="2" />
              <rect x="3" y="14" width="7" height="7" rx="2" />
              <rect x="14" y="14" width="7" height="7" rx="2" />
            </svg>
          </span>
          <span>Course Details</span>
        </div>

        <div className="flex items-center gap-[12px] px-[14px] py-[12px] rounded-[10px] text-[14px] text-[#5f6b7a] cursor-pointer hover:text-[#155DFC]" onClick={() => setOpenUsers(!openUsers)}>
          <span className="w-[20px] h-[20px] flex items-center justify-center [&>svg]:w-[18px] [&>svg]:h-[18px]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="18" x2="21" y2="18"></line><line x1="3" y1="24" x2="21" y2="24"></line></svg></span>
          <span>Users</span>
          <span className={`ml-auto text-[12px] transition-transform duration-200 ${openUsers ? "rotate-180" : ""}`}>▾</span>
        </div>

        {openUsers && (
          <div className="flex flex-col gap-[6px] mt-[4px]">
            <div className="flex items-center gap-[12px] py-[8px] px-[12px] ml-[8px] text-[13px] text-[#6B7280] cursor-pointer hover:text-[#155DFC]">
              <span className="w-[20px] h-[20px] flex items-center justify-center"><img src={usersIcon} className="w-[14px] h-[14px] scale-125" /></span>
              Imports Users
            </div>

            <div className="flex items-center gap-[12px] py-[8px] px-[12px] ml-[8px] text-[13px] text-[#6B7280] cursor-pointer hover:text-[#155DFC]">
              Manage User
            </div>
          </div>
        )}

        <div className="flex items-center gap-[12px] px-[14px] py-[12px] rounded-[10px] text-[14px] text-[#5f6b7a] cursor-pointer hover:text-[#155DFC]" onClick={() => setOpenOthers(!openOthers)}>
          <span className="w-[20px] h-[20px] flex items-center justify-center [&>svg]:w-[18px] [&>svg]:h-[18px]"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19L12 11" stroke="#000000" strokeWidth="4" strokeLinecap="round"></path> <path d="M7 19L7 15" stroke="#000000" strokeWidth="4" strokeLinecap="round"></path> <path d="M17 19V6" stroke="#000000" strokeWidth="4" strokeLinecap="round"></path> </svg></span>
          <span>Others</span>
          <span className={`ml-auto text-[12px] transition-transform duration-200 ${openOthers ? "rotate-180" : ""}`}>▾</span>
        </div>

        {openOthers && (
          <div className="flex flex-col gap-[6px] mt-[4px]">
            <div className="flex items-center gap-[12px] py-[8px] px-[12px] ml-[8px] text-[13px] text-[#6B7280] cursor-pointer hover:text-[#155DFC]">
              File Upload
            </div>
          </div>
        )}

      </div>

    </div>
  )
}

export default Sidebar