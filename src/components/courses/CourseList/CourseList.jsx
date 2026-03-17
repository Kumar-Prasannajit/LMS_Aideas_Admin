import "./CourseList.css"

function CourseListItem({course}){

  return(

    <div className="course-list">

      <img src={course.image} alt="" />

      <div className="list-info">

        <h4>{course.title}</h4>
        <p>{course.description}</p>

      </div>

      <span className="list-date">
        Last Update by username <br/>
        Date: {course.updatedAt}
      </span>

    </div>

  )

}

export default CourseListItem