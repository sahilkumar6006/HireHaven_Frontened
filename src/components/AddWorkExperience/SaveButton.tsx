

import React from "react";


interface AddWorkExperienceButtonProps {
  title: string;
}

const AddWorkExperienceButton: React.FC<AddWorkExperienceButtonProps> = ({ title }) => {
  

  return (
    <div>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-auto"
      >
        {title}
      </button>
    </div>
  );
};

export default AddWorkExperienceButton;