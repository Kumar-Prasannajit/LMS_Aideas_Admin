import "./LiveSessionCard.css"

import cameraIcon from "../../../assets/icons/camera.png"
import playIcon from "../../../assets/icons/play.png"
import courseIcon from "../../../assets/icons/course.png"
import clockIcon from "../../../assets/icons/clock.png"

function LiveSessionCard(){

  return(

    <div className="live-session">

      {/* LEFT SIDE */}

      <div className="live-left">

        <div className="video-icon">

          <img src={cameraIcon} alt="camera"/>

        </div>

        <div className="live-info">

          <h4>Fullstack AI</h4>

          <p>Machine Learning & AI</p>

          <span>By prof. Yashwanth</span>

          <div className="live-meta">

            <span>
                <img src={clockIcon} alt="clock"/>
                12:20PM</span>

            <span>

              <img src={courseIcon} alt="students"/>

              85 joined

            </span>

          </div>

        </div>

      </div>


      {/* RIGHT SIDE */}

      <div className="live-right">

        <span className="live-badge">

          ● Live

        </span>

        <button className="join-btn">

          <img src={playIcon} alt="play"/>

          Join

        </button>

      </div>

    </div>

  )

}

export default LiveSessionCard