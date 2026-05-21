import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Tutors from "../pages/Tutors";
import TutorProfile from "../pages/TutorProfile";
import Bookings from "../pages/Bookings";
import StudentDashboard from "../pages/StudentDashboard";
import TutorDashboard from "../pages/TutorDashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/tutors" element={<Tutors />} />
      <Route path="/tutor/:id" element={<TutorProfile />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/student-dashboard" element={<StudentDashboard />} />
      <Route path="/tutor-dashboard" element={<TutorDashboard />} />
    </Routes>
  );
}

export default AppRoutes;