const JobDetailSkeleton = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-300 rounded w-1/2" />
      <div className="h-4 bg-gray-300 rounded w-1/4" />
      <div className="h-48 bg-gray-200 rounded" />
    </div>
  );
};

export default JobDetailSkeleton;
// This component serves as a skeleton loader for the job detail page.  