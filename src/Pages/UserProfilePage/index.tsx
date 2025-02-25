import  { useState } from 'react';
import { 
  Edit, 
  Upload, 
  Briefcase, 
  Award, 
  FileText, 
  Clipboard 
} from 'lucide-react';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const profileData = {
    name: 'John Doe',
    title: 'Software Engineer',
    location: 'San Francisco, CA',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    summary: 'Experienced software engineer with 5+ years of expertise in full-stack web development, specializing in React and Node.js.',
    skills: ['React', 'Node.js', 'TypeScript', 'GraphQL', 'AWS', 'Docker'],
    experience: [
      {
        company: 'Tech Innovations Inc.',
        title: 'Senior Software Engineer',
        duration: 'Jan 2021 - Present',
        description: 'Led frontend architecture for enterprise web applications using React and TypeScript.'
      },
      {
        company: 'Global Solutions',
        title: 'Software Engineer',
        duration: 'Jun 2018 - Dec 2020',
        description: 'Developed scalable backend services using Node.js and microservices architecture.'
      }
    ],
    education: [
      {
        institution: 'Stanford University',
        degree: 'Master of Science in Computer Science',
        year: '2018'
      }
    ]
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6 md:p-10">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg">
        {/* Profile Header */}
        <div className="p-6 border-b flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="relative">
              <img 
                src="/api/placeholder/120/120" 
                alt="Profile" 
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
              <button className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full">
                <Upload size={16} />
              </button>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{profileData.name}</h1>
              <p className="text-gray-600">{profileData.title}</p>
              <div className="flex items-center space-x-4 text-gray-500 mt-2">
                <span>{profileData.location}</span>
                <span>•</span>
                <span>{profileData.email}</span>
              </div>
            </div>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center">
            <Edit className="mr-2" /> Edit Profile
          </button>
        </div>

        {/* Profile Tabs */}
        <div className="flex border-b">
          {[
            { id: 'overview', label: 'Overview', icon: <Clipboard /> },
            { id: 'experience', label: 'Experience', icon: <Briefcase /> },
            { id: 'education', label: 'Education', icon: <Award /> },
            { id: 'resume', label: 'Resume', icon: <FileText /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`
                flex items-center space-x-2 px-6 py-4 
                ${activeTab === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600' 
                  : 'text-gray-600 hover:text-gray-800'}
              `}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Profile Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Professional Summary</h2>
              <p className="text-gray-600 mb-6">{profileData.summary}</p>
              
              <h3 className="text-lg font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profileData.skills.map((skill, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Work Experience</h2>
              {profileData.experience.map((job, index) => (
                <div 
                  key={index} 
                  className="mb-6 pb-6 border-b last:border-b-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{job.title}</h3>
                      <p className="text-gray-600">{job.company}</p>
                    </div>
                    <span className="text-sm text-gray-500">{job.duration}</span>
                  </div>
                  <p className="mt-2 text-gray-600">{job.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Education</h2>
              {profileData.education.map((edu, index) => (
                <div 
                  key={index} 
                  className="mb-6 pb-6 border-b last:border-b-0"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">{edu.degree}</h3>
                      <p className="text-gray-600">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-gray-500">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'resume' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Resume</h2>
              <div className="border-2 border-dashed border-gray-300 p-6 text-center">
                <p className="text-gray-600 mb-4">Upload or create your resume</p>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 flex items-center mx-auto">
                  <Upload className="mr-2" /> Upload Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;