

import React from "react";

interface AddWorkExperienceInputBoxProps {
  title: string;
}

const AddWorkExperienceInputBox: React.FC<AddWorkExperienceInputBoxProps> = ({ title }) => {
  return (
    <input 
      type="text"
      placeholder={title}
      className="w-full mb-2 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};

export default AddWorkExperienceInputBox;

  