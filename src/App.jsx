import { BrowserRouter, Routes, Route } from "react-router-dom"
import CourseDetails from "./pages/courseDetails/courseDetails"
import Dashboard from "./pages/Dashboard/Dashboard"
import Courses from "./pages/Courses/Courses"

function App(){

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />} />

        <Route path="/courses/:id" element={<CourseDetails />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App