import "./CourseCard.css"
import { useNavigate } from "react-router-dom"

function CourseCard({ course, view = "grid" }) {

  const navigate = useNavigate()

  return (

    <div
      className={`course-card ${view}`}
      onClick={() => navigate(`/courses/${course.id}`)}
    >

      <img src={course.image} alt="" />

      <div className="course-content">
        <h4 className="course-title">{course.title}</h4>
        <p className="course-desc">{course.description}</p>
        <span className="course-meta">
          Last Update by username <br />
          Date: {course.updatedAt}
        </span>

      </div>

    </div>

  )

}

export default CourseCard