import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Filter, 
  CheckCircle 
} from 'lucide-react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

const JobListings = () => {
  const [filters, setFilters] = useState({
    searchTerm: '',
    location: '',
    jobType: '',
    salaryRange: ''
  });

  const jobListings = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Innovations Inc.',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$120k - $150k',
      tags: ['React', 'Node.js', 'Cloud'],
      datePosted: '2 days ago',
      isEasyApply: true
    },
    {
      title: 'Product Manager',
      company: 'Global Solutions',
      location: 'New York, NY',
      type: 'Remote',
      salary: '$110k - $140k',
      tags: ['Product Strategy', 'Agile', 'SaaS'],
      datePosted: '5 days ago',
      isEasyApply: false
    },
    {
      title: 'Data Scientist',
      company: 'DataCraft Technologies',
      location: 'Remote',
      type: 'Contract',
      salary: '$100k - $130k',
      tags: ['Machine Learning', 'Python', 'AI'],
      datePosted: '1 week ago',
      isEasyApply: true
    }
  ];

  return (
    <>
    <Navbar/>

    <div className="bg-gray-50 min-h-screen p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        {/* Search and Filters */}
        <div className="mb-8 bg-white shadow-md rounded-lg p-6">
          <div className="flex space-x-4">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
            <button className="bg-blue-600 text-white px-4 rounded-md hover:bg-blue-700 flex items-center">
              <Filter className="mr-2" /> Filters
            </button>
          </div>
        </div>

        {/* Job Listings */}
        <div className="grid md:grid-cols-1 gap-6">
          {jobListings.map((job, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
                  <div className="flex items-center text-gray-600 mt-2">
                    <Briefcase className="mr-2 text-gray-400" size={18} />
                    <span>{job.company}</span>
                    <span className="mx-2">•</span>
                    <span>{job.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-700">{job.salary}</p>
                  <p className="text-sm text-gray-500">{job.datePosted}</p>
                </div>
              </div>

              <div className="mt-4 flex items-center space-x-2">
                {job.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">{job.type}</span>
                  {job.isEasyApply && (
                    <span className="bg-green-50 text-green-600 px-2 py-1 rounded-full text-xs flex items-center">
                      <CheckCircle className="mr-1" size={14} /> Easy Apply
                    </span>
                  )}
                </div>
                <div className="space-x-2">
                    <a
                    href="JobDetail"
                    className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 inline-block text-center"
                    >
                    View Details
                    </a>
                  {job.isEasyApply && (
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                      Quick Apply
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
          {[1, 2, 3, 4, 5].map((page) => (
            <button 
              key={page} 
              className="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {page}
            </button>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default JobListings;