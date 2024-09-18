import { type EducationData } from '../App';
import { Form } from '../Utils/Form';
// import { ChangeEvent, useState } from 'react';
// import { Form } from '../Utils/Form';
// import { Input } from '../Utils/Inputs';
// import { AddButton } from '../Utils/AddButton';
// import { v4 as uuidv4 } from 'uuid';

type EducationFieldProp = {
  educationData: EducationData;
  handleEducationChange: (
    index: number,
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
      {educationData.map((edu, index) => (
        <div key={index} className="mb-4">
          <input
            type="text"
            name="schoolName"
            placeholder="School"
            value={edu.schoolName}
            onChange={(e) => handleEducationChange(index, e)}
            className="mb-2 block w-full rounded border p-2"
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={edu.title}
            onChange={(e) => handleEducationChange(index, e)}
            className="mb-2 block w-full rounded border p-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={edu.location}
            onChange={(e) => handleEducationChange(index, e)}
            className="mb-2 block w-full rounded border p-2"
          />
          <input
            type="text"
            name="startDate"
            placeholder="Start Date"
            value={edu.startDate}
            onChange={(e) => handleEducationChange(index, e)}
            className="mb-2 block w-full rounded border p-2"
          />
          <input
            type="text"
            name="endDate"
            placeholder="End Date or Current"
            value={edu.endDate}
            onChange={(e) => handleEducationChange(index, e)}
            className="mb-2 block w-full rounded border p-2"
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
