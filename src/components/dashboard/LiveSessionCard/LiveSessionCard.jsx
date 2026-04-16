import cameraIcon from "../../../assets/icons/camera.png"
import playIcon from "../../../assets/icons/play.png"
import courseIcon from "../../../assets/icons/course.png"
import clockIcon from "../../../assets/icons/clock.png"

function LiveSessionCard(){

  return(

    <div className="bg-[#EFF1F9] rounded-[14px] p-[18px] flex justify-between items-center relative">

      <div className="flex gap-[14px] items-center">

        <div className="w-[46px] h-[46px] bg-[#155DFC] rounded-[12px] flex items-center justify-center">

          <img src={cameraIcon} alt="camera" className="w-[20px]"/>

        </div>

        <div className="live-info">

          <h4 className="text-[16px] font-semibold mb-[2px]">Fullstack AI</h4>

          <p className="text-[13px] text-[#777] mb-[2px]">Machine Learning & AI</p>

          <span className="text-[12px] text-[#999]">By prof. Yashwanth</span>

          <div className="flex items-center gap-[16px] mt-[6px] text-[12px] text-[#777]">

            <span className="flex items-center gap-[5px] text-[#999]">
                <img src={clockIcon} alt="clock" className="w-[14px] h-[14px]"/>
                12:20PM</span>

            <span className="flex items-center gap-[5px] text-[#999]">

              <img src={courseIcon} alt="students" className="w-[14px] h-[14px]"/>

              85 joined

            </span>

          </div>

        </div>

      </div>


      <div className="flex flex-col items-end gap-[8px]">

        <span className="absolute -top-[8px] right-[20px] bg-[#BA2020] text-white text-[12px] px-[10px] py-[4px] rounded-[12px]">

          ● Live

        </span>

        <button className="bg-[#2F6FED] text-white border-none rounded-[20px] px-[16px] py-[6px] flex items-center gap-[6px] cursor-pointer">

          <img src={playIcon} alt="play" className="w-[14px]"/>

          Join

        </button>

      </div>

    </div>

  )

}

export default LiveSessionCard