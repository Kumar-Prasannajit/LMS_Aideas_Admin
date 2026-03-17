import "./CourseCard.css"
import { useNavigate } from "react-router-dom"

function CourseCard({ course }) {

  const navigate = useNavigate()

  return(

    <div
      className="course-card"
      onClick={() => navigate(`/courses/${course.id}`)}
    >

      <img src={course.image} alt="" />

      <div className="course-content">

        <h4>{course.title}</h4>

        <p>{course.description}</p>

        <span>
          Last Update by username <br/>
          Date: {course.updatedAt}
        </span>

      </div>

    </div>

  )

}

export default CourseCard