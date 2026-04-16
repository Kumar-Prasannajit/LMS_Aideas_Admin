import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"
import AdminLayout from "../../layout/AdminLayout/AdminLayout"
import Sidebar from "../../components/courses/courseDetails/Sidebar.jsx"
import EnrolledBy from "./EnrolledBy"
import { courses } from "../../data/courseData"
import { modules } from "../../data/modules"
import editIcon from "../../assets/icons/course.png" 

function CourseDetails() {
    const { id } = useParams()
    const navigate = useNavigate()

    const [activeTab, setActiveTab] = useState("modules")

    const course = courses.find(c => c.id === Number(id))
    const courseModules = modules.filter(m => m.courseId === Number(id))

    if (!course) {
        return (
            <AdminLayout>
                <h2>Course not found</h2>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className="flex gap-[24px] px-[80px] py-[24px] items-start h-[calc(100vh-100px)]">
                <Sidebar />
                <div className="flex-1 w-full bg-white p-[24px] rounded-[16px] shadow-sm">
                    <div className="flex items-center justify-between mb-[16px]">
                        <div className="flex items-center">
                            <span className="p-[8px] bg-[#f4f6f8] rounded-[8px] cursor-pointer">
                                🏫
                            </span>
                            <div className="flex-1 ml-[12px]">
                                <h2 className="text-[22px] font-semibold">{course.title}</h2>
                                <p className="text-[13px] text-[#8a8a8a] mt-[4px]">Courses / Details</p>
                            </div>
                        </div>

                        <button className="px-[14px] py-[8px] rounded-[8px] border border-[#155DFC] text-[#155DFC] bg-white cursor-pointer hover:bg-[#f0f4ff]">
                            + Add Module
                        </button>
                    </div>

                    <div className="flex items-center justify-between mb-[20px]">
                        <div className="flex gap-[28px] border-b border-[#eee] flex-1">
                            {["details", "modules", "enrolled", "settings"].map((tab) => (
                                <span
                                    key={tab}
                                    className={`pb-[10px] cursor-pointer text-[14px] capitalize ${
                                        activeTab === tab ? "text-[#2563EB] border-b-2 border-[#2563EB]" : "text-[#6b7280]"
                                    }`}
                                    onClick={() => setActiveTab(tab)}
                                >
                                    {tab}
                                </span>
                            ))}
                        </div>

                        <div className="flex gap-[10px] ml-[20px]">
                            {activeTab === "enrolled" ? (
                                <>
                                    <button className="px-[10px] py-[6px] bg-[#2563eb] text-white border-none rounded-[6px] cursor-pointer hover:opacity-90">Export</button>
                                    <button className="px-[10px] py-[6px] border border-[#155DFC] text-[#155DFC] bg-white rounded-[6px] cursor-pointer hover:bg-[#f0f4ff]">Access Activity History</button>
                                </>
                            ) : (
                                <>
                                    <button className="px-[10px] py-[6px] border border-[#eee] bg-white rounded-[6px] cursor-pointer hover:bg-[#f9f9f9]">Discard</button>
                                    <button className="px-[10px] py-[6px] bg-[#2563eb] text-white border-none rounded-[6px] cursor-pointer hover:opacity-90">Save Changes</button>
                                </>
                            )}
                        </div>
                    </div>

                    {activeTab === "modules" && (
                        courseModules.map(module => (
                            <div key={module.id} className="w-full bg-[#f8f9fb] border border-[#e6e6e6] rounded-[12px] p-[20px] mt-[20px]">
                                <div className="flex justify-between items-center pb-[10px] border-b border-[#eee]">
                                    <h4 className="text-[15px] font-semibold">Module - {module.id}</h4>
                                    <div className="flex gap-[12px] items-center">
                                        <p className="text-[12px] text-[#999]">{module.topics?.length || 0} topics</p>
                                        <span className="cursor-pointer text-[#ff4d4f]">🗑</span>
                                        <span className="cursor-pointer">⌄</span>
                                    </div>
                                </div>

                                <div className="mt-[15px]">
                                    <label className="text-[13px] text-[#777]">Module Title*</label>
                                    <div className="flex items-center gap-[10px] mt-[6px]">
                                        <input 
                                            value={module.title} 
                                            className="flex-1 w-full px-[14px] py-[10px] rounded-[8px] border border-[#e0e0e0] bg-white text-[14px]"
                                            readOnly 
                                        />
                                        <img src={editIcon} alt="edit" className="w-[16px] h-[16px] cursor-pointer" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-[40px_1fr_1.5fr_60px] gap-[16px] items-center text-[13px] font-medium text-[#888] mt-[20px] mb-[6px]">
                                    <span>#</span>
                                    <span>Date</span>
                                    <span>Topic</span>
                                    <span>Link</span>
                                    <span>Delete</span>
                                </div>

                                {module.topics && module.topics.map((topic, index) => (
                                    <div key={topic.id}>
                                        <div className="grid grid-cols-[40px_1fr_1.5fr_60px] gap-[16px] items-center mt-[12px]">
                                            <span>{index + 1}</span>
                                            <input value={topic.date || ""} className="w-full px-[14px] py-[10px] rounded-[8px] border border-[#e0e0e0] bg-white text-[14px] outline-none" readOnly />
                                            <input value={topic.link || ""} className="w-full px-[14px] py-[10px] rounded-[8px] border border-[#e0e0e0] bg-white text-[14px] outline-none" readOnly />
                                            <span className="cursor-pointer text-[#ff4d4f] text-center">🗑</span>
                                        </div>
                                        <div className="col-start-2 col-span-3 text-[12px] text-[#999] mt-[8px]">
                                            <p className="mb-[2px]">Attachments:</p>
                                            <span className="text-[#155DFC] cursor-pointer block mt-[3px] text-[13px] hover:underline">+ Add Attachments</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))
                    )}

                    {activeTab === "enrolled" && <EnrolledBy />}
                    {activeTab === "details" && <p className="mt-[20px] text-[#666]">Details coming soon...</p>}
                    {activeTab === "settings" && <p className="mt-[20px] text-[#666]">Settings coming soon...</p>}

                </div>
            </div>
        </AdminLayout>
    )
}

export default CourseDetails