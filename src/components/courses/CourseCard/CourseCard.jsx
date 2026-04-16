import { useNavigate } from "react-router-dom"

function CourseCard({ course, view = "grid" }) {

  const navigate = useNavigate()

  return (

    <div
      className={`bg-white rounded-[12px] p-[10px] border border-[#eee] cursor-pointer ${
        view === "list" ? "flex items-center gap-[20px] w-full" : ""
      }`}
      onClick={() => navigate(`/courses/${course.id}`)}
    >

      <img 
        src={course.image} 
        alt="" 
        className={`${
          view === "list" 
            ? "w-[100px] h-[60px] m-0 rounded-[8px] shrink-0 object-cover" 
            : "w-full h-[140px] object-cover rounded-[10px]"
        }`}
      />

      <div className={`${
        view === "list"
          ? "flex justify-between items-center grow p-0 min-h-0"
          : "relative p-[12px] min-h-[100px]"
      }`}>
        
        <div className={view === "list" ? "flex flex-col" : ""}>
          <h4 className={`text-[14px] font-semibold whitespace-nowrap overflow-hidden text-ellipsis ${view === "list" ? "mb-[4px]" : ""}`}>
            {course.title}
          </h4>
          <p className={`text-[12px] text-[#777] mt-[4px] ${view === "list" ? "line-clamp-1" : ""}`}>
            {course.description}
          </p>
        </div>
        
        <span className={`text-[11px] text-[#aaa] text-right ${
          view === "list"
            ? "static min-w-[150px]"
            : "absolute right-[12px] bottom-[12px]"
        }`}>
          Last Update by username <br />
          Date: {course.updatedAt}
        </span>

      </div>

    </div>

  )

}

export default CourseCard