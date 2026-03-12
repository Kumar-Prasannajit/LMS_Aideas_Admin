import AdminLayout from "../../layout/AdminLayout/AdminLayout"
import StatCard from "../../components/dashboard/StatCard/StatCard"

import iconCourses from "../../assets/icons/total-courses.png"
import iconStudents from "../../assets/icons/total-students.png"
import iconLiveClass from "../../assets/icons/live-class.png"
import iconTrainers from "../../assets/icons/total-trainers.png"

import bookIcon from "../../assets/icons/course2.png"
import courseIcon from "../../assets/icons/course.png"

import AssessmentChart from "../../components/dashboard/Charts/AssessmentChart"
import LSRWChart from "../../components/dashboard/Charts/LSRWChart"
import Card from "../../components/ui/Card/Card"
import LiveSessionCard from "../../components/dashboard/LiveSessionCard/LiveSessionCard"
import ScheduleCard from "../../components/dashboard/ScheduleCard/ScheduleCard"

import {
  dashboardStats,
  liveSessions,
  upcomingSchedule
} from "../../data/dashboardData"

import "./Dashboard.css"

function Dashboard() {

  return (

    <AdminLayout>

      <div className="stats-container">

        {dashboardStats.map((stat) => {

          // Map the imported string types to actual icons and colors
          let iconImg, borderColor, iconBg, bgColor;

          switch (stat.type) {
            case "courses":
              iconImg = iconCourses;
              borderColor = "#E4C8FF";
              iconBg = "#FCF9FF";
              bgColor = "#FCF9FF";
              break;
            case "students":
              iconImg = iconStudents;
              borderColor = "#FFD19D";
              iconBg = "#FFFAF3";
              bgColor = "#FFFAF3";
              break;
            case "live":
              iconImg = iconLiveClass;
              borderColor = "#D6E4FF";
              iconBg = "#EEF5FF";
              bgColor = "#EEF5FF";
              break;
            case "trainers":
              iconImg = iconTrainers;
              borderColor = "#5AD584";
              iconBg = "#F1FFF5";
              bgColor = "#F1FFF5";
              break;
            default: break;
          }

          return (
            <StatCard
              key={stat.id}
              title={stat.title}
              value={stat.value}
              badgeText={stat.badge}
              icon={<img src={iconImg} alt={stat.type} width="22" />}
              borderColor={borderColor}
              iconBg={iconBg}
              bgColor={bgColor}
            />
          )
        })}

      </div>

      <div className="dashboard-grid">

        <Card title="Live Sessions" action="View all">

          {liveSessions.map(session => (
            <LiveSessionCard key={session.id} {...session} />
          ))}

        </Card>

        <Card title="Upcoming Schedule" action="View all">

          {upcomingSchedule.map(item => {
            return (
              <ScheduleCard 
                key={item.id} 
                {...item} 
                icon={item.iconType === "book" ? bookIcon : courseIcon}
                iconBg={item.iconType === "book" ? "#F3F4F9" : "#F8F0E6"}
              />
            )
          })}

        </Card>

      </div>

      <div className="dashboard-grid">

        <Card title="Assessments Graph">
          <AssessmentChart />
        </Card>

        <Card title="LSRW">
          <LSRWChart />
        </Card>

      </div>

    </AdminLayout>

  )

}

export default Dashboard