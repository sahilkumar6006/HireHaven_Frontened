import { useJobDetailContext } from './context/JobDetailContext';

const JobDetailDescription = () => {
  const { jobDetail } = useJobDetailContext();

  if (!jobDetail) return null;

  return (
    <div className="prose max-w-full">
      <h2>Description</h2>
      <p>{jobDetail.description}</p>

      {jobDetail.requirements && (
        <   >
          <h3>Requirements</h3>
          <ul>
            {jobDetail.requirements.map((req: string, index: number) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default JobDetailDescription;
