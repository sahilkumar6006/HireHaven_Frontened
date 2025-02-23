

import React from "react";
import { useNavigate } from "react-router-dom";

interface AddWorkExperienceButtonProps {
  title: string;
}

const AddWorkExperienceButton: React.FC<AddWorkExperienceButtonProps> = ({ title }) => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div>
      <button
        onClick={() => navigate("/userProfilePage/AddWorkExperience")}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors w-auto"
      >
        {title}
      </button>
    </div>
  );
};

export default AddWorkExperienceButton;

