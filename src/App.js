import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import CourseListingPage from './Pages/CourseListingPage';
import CourseDetailsPage from './Pages/CourseDetailsPage';
import StudentDashboardPage from './Pages/StudentDashboardPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CourseListingPage />} />
        <Route path="/course/:id" element={<CourseDetailsPage />} />
        <Route path="/dashboard" element={<StudentDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
