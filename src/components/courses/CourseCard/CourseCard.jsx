import "./CourseCard.css"

function CourseCard({course}){

  return(

    <div className="course-card">

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