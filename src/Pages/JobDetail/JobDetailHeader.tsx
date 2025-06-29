import {useJobDetailContext} from './context/JobDetailContext';

const JobDetailHeader = () => {
  const {jobDetail} = useJobDetailContext ();

  if (!jobDetail) return null;

  return (
    <div className="border-b pb-4">
      <h1 className="text-3xl font-bold">{jobDetail.title}</h1>
      <p className="text-gray-600">
        {jobDetail.company_name} — {jobDetail.location}
      </p>
    </div>
  );
};

export default JobDetailHeader;
