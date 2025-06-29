import {useJobDetailContext} from './context/JobDetailContext';

const JobDetailSidebar = () => {
  const {jobDetail} = useJobDetailContext ();

  if (!jobDetail) return null;

  return (
    <div className="p-4 border rounded-lg shadow-sm space-y-4">
      <div>
        <p className="text-gray-600">Job Type</p>
        <p className="font-medium">{jobDetail.job_type}</p>
      </div>
      <div>
        <p className="text-gray-600">Posted</p>
        <p className="font-medium">
          {new Date (jobDetail.posted_at).toDateString ()}
        </p>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded">
        Apply Now
      </button>
    </div>
  );
};

export default JobDetailSidebar;
