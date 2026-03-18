import "./courseDetails.css"
import { useParams, useNavigate } from "react-router-dom"
import { useState } from "react"

import AdminLayout from "../../layout/AdminLayout/AdminLayout"
import { courses } from "../../data/courseData"
import { modules } from "../../data/modules"

import Sidebar from "../../components/courses/courseDetails/Sidebar.jsx"
import EnrolledBy from "./EnrolledBy"

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

            <div className="course-page">

                <Sidebar />

                <div className="course-main">


                    <div className="course-header">

                        <div>
                            <h2>{course.title}</h2>
                            <p className="breadcrumb">Admin / Courses / Modules</p>
                        </div>

                    </div>


                    <div className="tabs-header">

                        {/* LEFT: TABS */}
                        <div className="tabs">

                            <span
                                onClick={() => setActiveTab("details")}
                                className={activeTab === "details" ? "active" : ""}
                            >
                                Details
                            </span>

                            <span
                                onClick={() => setActiveTab("modules")}
                                className={activeTab === "modules" ? "active" : ""}
                            >
                                Modules
                            </span>

                            <span
                                onClick={() => setActiveTab("enrolled")}
                                className={activeTab === "enrolled" ? "active" : ""}
                            >
                                Enrolled By
                            </span>

                            <span
                                onClick={() => setActiveTab("settings")}
                                className={activeTab === "settings" ? "active" : ""}
                            >
                                Settings
                            </span>

                        </div>

                        {/* RIGHT: ACTION BUTTONS */}
                        <div className="tab-actions">

                            {activeTab === "modules" && (
                                <button className="add-module-btn">
                                    Add New Module
                                </button>
                            )}

                            {activeTab === "enrolled" && (
                                <>
                                    <button className="btn-primary">Export</button>
                                    <button className="btn-outline">Access Activity History</button>
                                </>
                            )}

                        </div>

                    </div>



                    {activeTab === "modules" && (
                        courseModules.map(module => (

                            <div className="module-card" key={module.id}>

                                <div className="module-header">
                                    <div>
                                        <h4>{module.title}</h4>
                                        <p>{module.createdAt}</p>
                                    </div>
                                    <span className="collapse-icon">▲</span>
                                </div>

                                <div className="module-title-row">
                                    <label>Module Title</label>

                                    <div className="title-input">
                                        <input value={module.title} readOnly />
                                        <span className="delete-icon">🗑</span>
                                    </div>
                                </div>

                                <div className="topic-header">
                                    <span>#</span>
                                    <span>Topic</span>
                                    <span>Link</span>
                                    <span>Delete</span>
                                </div>

                                {module.topics.map((topic, index) => (

                                    <div key={topic.id}>

                                        <div className="topic-row">

                                            <span>{index + 1}</span>

                                            <input value={topic.date} readOnly />
                                            <input value={topic.link} readOnly />

                                            <span className="delete-icon">🗑</span>

                                        </div>

                                        <div className="attachments">
                                            <p>Attachments:</p>
                                            <span className="add-attachment">+ Add Attachments</span>
                                        </div>

                                    </div>

                                ))}

                            </div>

                        ))
                    )}

                    {activeTab === "enrolled" && <EnrolledBy />}

                    {activeTab === "details" && <p>Details coming soon...</p>}
                    {activeTab === "settings" && <p>Settings coming soon...</p>}

                </div>

            </div>

        </AdminLayout>

    )
}

export default CourseDetails