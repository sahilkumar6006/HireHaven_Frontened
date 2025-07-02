import React, { useState } from 'react';
import { 
  Briefcase, 
  ChevronRight, 
  FileText, 
  BarChart2, 
  CheckCircle, 
  XCircle, 
  Clock 
} from 'lucide-react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const jobApplications = [
    { 
      company: 'Tech Innovations Inc.', 
      position: 'Senior Software Engineer', 
      status: 'Applied',
      date: '2 days ago',
      statusIcon: <Clock className="text-yellow-500" />,
      statusColor: 'text-yellow-500'
    },
    { 
      company: 'Global Solutions', 
      position: 'Product Manager', 
      status: 'Interview',
      date: '5 days ago',
      statusIcon: <CheckCircle className="text-green-500" />,
      statusColor: 'text-green-500'
    },
    { 
      company: 'DataCraft Technologies', 
      position: 'Data Scientist', 
      status: 'Rejected',
      date: '1 week ago',
      statusIcon: <XCircle className="text-red-500" />,
      statusColor: 'text-red-500'
    }
  ];

  const recentJobs = [
    {
      title: 'Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      salary: '$120k - $150k'
    },
    {
      title: 'Product Manager',
      company: 'Global Solutions',
      location: 'New York, NY',
      salary: '$110k - $140k'
    },
    {
      title: 'Data Scientist',  
      company: 'DataCraft Technologies',
      location: 'Remote',
      salary: '$100k - $130k'
    }
  ];


  
  return (
    <>
     <Navbar/>

    <div className="bg-gray-50 min-h-screen p-6 md:p-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Overview & Stats */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                icon: <Briefcase className="text-blue-500" />, 
                title: 'Total Jobs', 
                value: '254',
                bgColor: 'bg-blue-50'
              },
              { 
                icon: <FileText className="text-green-500" />, 
                title: 'Applications', 
                value: '42',
                bgColor: 'bg-green-50'
              },
              { 
                icon: <BarChart2 className="text-purple-500" />, 
                title: 'Profile Views', 
                value: '1,254',
                bgColor: 'bg-purple-50'
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className={`${stat.bgColor} p-4 rounded-lg flex items-center space-x-4`}
              >
                <div className="p-3 rounded-full bg-white shadow-sm">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{stat.title}</p>
                  <p className="text-2xl font-bold">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Job Applications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Recent Job Applications</h2>
              <button className="text-blue-600 hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {jobApplications.map((application, index) => (
                <div 
                  key={index} 
                  className="flex justify-between items-center border-b pb-4 last:border-b-0"
                >
                  <div>
                    <p className="font-medium text-gray-800">{application.company}</p>
                    <p className="text-sm text-gray-500">{application.position}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div>
                      <p className={`${application.statusColor} text-sm font-medium`}>
                        {application.status}
                      </p>
                      <p className="text-xs text-gray-400">{application.date}</p>
                    </div>
                    {application.statusIcon}
                    <ChevronRight className="text-gray-400" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Recent Jobs & Recommendations */}
        <div className="space-y-6">
          {/* Recent Job Openings */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Recommended Jobs</h2>
              <button className="text-blue-600 hover:underline">See More</button>
            </div>
            <div className="space-y-4">
              {recentJobs.map((job, index) => (
                <div 
                  key={index} 
                  className="border-b pb-4 last:border-b-0"
                >
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{job.title}</p>
                      <p className="text-sm text-gray-500">{job.company}</p>
                    </div>
                    <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-full">
                      <Briefcase size={20} />
                    </button>
                  </div>
                  <div className="flex justify-between text-xs text-gray-500 mt-2">
                    <p>{job.location}</p>
                    <p>{job.salary}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Completion */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Profile Completion</h2>
            <div className="mb-4 bg-gray-200 rounded-full h-2.5">
              <div 
                className="bg-blue-600 h-2.5 rounded-full" 
                style={{width: '65%'}}
              ></div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Complete your profile to increase visibility to recruiters
            </p>
            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
              Complete Profile
            </button>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;