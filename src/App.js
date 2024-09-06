import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import CourseListingPage from './Pages/CourseListingPage';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import StudentDashboardPage from './Pages/StudentDashboardPage';
import PendingCourse from './Pages/pendingCourse';
import CompletedCourses from './Pages/CompletedCourses';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
        <Route path="/pending" element={<PendingCourse />} />
        <Route path="/completed" element={<CompletedCourses />} />
      </Routes>
    </Router>
  );
}

export default App;
