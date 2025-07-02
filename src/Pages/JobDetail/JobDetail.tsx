import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import JobDetailContent from './JobDetailContent';
import { JobDetailProvider } from './context/JobDetailContext';

const JobDetail = () => {
  const { jobId } = useParams<{ jobId: string }>();

  // Dummy job data
  const jobDetail = {
    id: jobId,
    title: 'Frontend Developer',
    company_name: 'OpenAI Inc.',
    location: 'Remote',
    description: 'We are looking for a talented frontend developer to join our team...',
    requirements: [
      '3+ years experience in React',
      'Strong understanding of HTML, CSS, JavaScript',
      'Experience with TailwindCSS is a plus'
    ],
    job_type: 'Full-time',
    posted_at: new Date().toISOString()
  };

  return (
    <JobDetailProvider value={{ jobDetail }}>
      <Navbar />
      <div className="container mx-auto  height-auto px-8 py-8 ">
        <JobDetailContent />
          </div>
         <Footer/>
      </JobDetailProvider>
      
  );
};

export default JobDetail;
