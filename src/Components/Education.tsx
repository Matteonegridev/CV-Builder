import { type EducationData } from '../App';
import { Form } from '../Utils/Form';
// import { ChangeEvent, useState } from 'react';
// import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
// import { AddButton } from '../Utils/AddButton';
// import { v4 as uuidv4 } from 'uuid';

type EducationFieldProp = {
  educationData: EducationData;
  handleEducationChange: (
    index: string,
    e: React.ChangeEvent<HTMLInputElement>,
  ) => void;
  addEducationField: () => void;
};

function EducationField({
  educationData,
  handleEducationChange,
  addEducationField,
}: EducationFieldProp) {
  return (
    <Form>
      <h3 className="mb-4 text-xl font-semibold">Education</h3>
      {educationData.map((edu) => (
        <div key={edu.id} className="mb-4">
          <Input
            label="School Name"
            name="schoolName"
            onChange={(e) => handleEducationChange(edu.id, e)}
            text="Enter school"
            value={edu.schoolName}
          />
          <Input
            label="Title or Degree"
            name="title"
            onChange={(e) => handleEducationChange(edu.id, e)}
            text="Enter title"
            value={edu.title}
          />
          <Input
            label="Field of Study"
            name="field"
            onChange={(e) => handleEducationChange(edu.id, e)}
            text="Enter field of study"
            value={edu.field}
          />
          <Input
            label="Location"
            name="location"
            onChange={(e) => handleEducationChange(edu.id, e)}
            text="Enter location"
            value={edu.location}
          />
          <Input
            label="Start Date"
            name="startDate"
            onChange={(e) => handleEducationChange(edu.id, e)}
            text="Start date"
            value={edu.startDate}
          />
          <Input
            label="End Date"
            name="endDate"
            onChange={(e) => handleEducationChange(edu.id, e)}
            text="End date"
            value={edu.endDate}
          />
        </div>
      ))}
      <button
        onClick={addEducationField}
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700"
      >
        Add More Education
      </button>
    </Form>
  );
}
export default EducationField;
