import { BrowserRouter, Routes, Route } from "react-router-dom"

import Dashboard from "./pages/Dashboard/Dashboard"
import Courses from "./pages/Courses/Courses"

function App(){

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Dashboard />} />

        <Route path="/courses" element={<Courses />} />

      </Routes>

    </BrowserRouter>

  )

}

export default App