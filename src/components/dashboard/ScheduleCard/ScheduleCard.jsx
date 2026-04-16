function ScheduleCard({title, category, time, timeColor, icon, iconBg}){

  return(

    <div className="bg-[#F4F6FB] rounded-[14px] px-[16px] py-[14px] flex justify-between items-center">

      <div className="flex items-center gap-[12px]">

        <div
          className="w-[40px] h-[40px] rounded-[10px] flex items-center justify-center"
          style={{background:iconBg}}
        >
          <img src={icon} alt="icon" className="w-[18px]"/>
        </div>

        <div className="schedule-info">

          <h4 className="text-[14px] font-semibold">{title}</h4>

          <span className="text-[12px] text-[#888]">{category}</span>

        </div>

      </div>

      <div
        className="text-[12px] font-normal"
        style={{color:timeColor}}
      >
        {time}
      </div>

    </div>

  )

}

export default ScheduleCard