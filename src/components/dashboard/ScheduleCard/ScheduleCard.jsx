import "./ScheduleCard.css"

function ScheduleCard({title, category, time, timeColor, icon, iconBg}){

  return(

    <div className="schedule-card">

      <div className="schedule-left">

        <div
          className="schedule-icon"
          style={{background:iconBg}}
        >
          <img src={icon} alt="icon"/>
        </div>

        <div className="schedule-info">

          <h4>{title}</h4>

          <span>{category}</span>

        </div>

      </div>

      <div
        className="schedule-time"
        style={{color:timeColor}}
      >
        {time}
      </div>

    </div>

  )

}

export default ScheduleCard