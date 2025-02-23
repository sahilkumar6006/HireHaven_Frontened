import React, { useState } from 'react';

function WorkExperience() {
  const [experience, setExperience] = useState([{ jobTitle: '', company: '', duration: '' }]);

  const handleChange = (index, event) => {
    const values = [...experience];
    values[index][event.target.name] = event.target.value;
    setExperience(values);
  };

  const addExperience = () => {
    setExperience([...experience, { jobTitle: '', company: '', duration: '' }]);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-bold mb-4">Resume  Builder</h2>
      {experience.map((exp, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
            value={exp.jobTitle}
            onChange={(event) => handleChange(index, event)}
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={exp.company}
            onChange={(event) => handleChange(index, event)}
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={exp.duration}
            onChange={(event) => handleChange(index, event)}
            className="border border-gray-300 rounded p-2 w-full mb-2"
          />
        </div>
      ))}
      <button
        onClick={addExperience}
        className="bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
      >
        Add More Experience
      </button>
    </div>
  );
}

export default WorkExperience;