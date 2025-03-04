import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import Dashboard from './Pages/Dashboard';
import JobListings from './Pages/JobListing';
import UserProfilePage from './Pages/UserProfilePage'
import './index.css';
import AboutUs from './Pages/AboutUs';

import WorkExperience from './Pages/ResumeBuilderPage';
import AddWorkExperience from './components/AddWorkExperience';
import PostJob from './Pages/JobAdd/index'



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage login={true} />} />
        <Route path='/AuthPage' element={<AuthPage />} />
        <Route path="/Dashboard" element={< Dashboard />} />
        <Route path="/JobListings" element={<JobListings />} />
        <Route path="/AboutUs" element={<AboutUs />} />

        <Route path='/ResumeBuilderPage' element={<WorkExperience />} />
        <Route path="/UserProfilePage" element={<UserProfilePage />} />
        <Route path="/UserProfilePage/AddWorkExperience" element={<AddWorkExperience />} />
        <Route path='/PostJob' element={<PostJob />} />


      </Routes>
    </Router>
  )
}


export default App
