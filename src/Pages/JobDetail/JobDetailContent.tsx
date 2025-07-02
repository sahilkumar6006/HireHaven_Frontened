import React from 'react';
import JobDetailHeader from './JobDetailHeader';
import JobDetailDescription from './JobDetailDescription';
import JobDetailSidebar from './JobDetailSidebar';

const JobDetailContent = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <JobDetailHeader />
        <JobDetailDescription />
      </div>
      <div>
        <JobDetailSidebar />
      </div>
    </div>
  );
};

export default JobDetailContent;
