import { type EducationData } from '../App';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { AddButton } from '../Utils/AddButton';

type T = {
  id: string;
  schoolName: string;
  title: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
};

type EducationFieldProp = {
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<T[]>>;
  handleChange: (
    index: string,
    e: React.ChangeEvent<HTMLInputElement>,
    setState: React.Dispatch<React.SetStateAction<T[]>>,
  ) => void;
  addEducationField: () => void;
};

function EducationField({
  educationData,
  setEducationData,
  // handleEducationChange,
  handleChange,
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
            onChange={(e) => handleChange(edu.id, e, setEducationData)}
            text="Enter school"
            value={edu.schoolName}
          />
          <Input
            label="Title or Degree"
            name="title"
            onChange={(e) => handleChange(edu.id, e, setEducationData)}
            text="Enter title"
            value={edu.title}
          />
          <Input
            label="Field of Study"
            name="field"
            onChange={(e) => handleChange(edu.id, e, setEducationData)}
            text="Enter field of study"
            value={edu.field}
          />
          <Input
            label="Location"
            name="location"
            onChange={(e) => handleChange(edu.id, e, setEducationData)}
            text="Enter location"
            value={edu.location}
          />
          <Input
            label="Start Date"
            name="startDate"
            onChange={(e) => handleChange(edu.id, e, setEducationData)}
            text="Start date"
            value={edu.startDate}
          />
          <Input
            label="End Date"
            name="endDate"
            onChange={(e) => handleChange(edu.id, e, setEducationData)}
            text="End date"
            value={edu.endDate}
          />
        </div>
      ))}
      <AddButton onClick={addEducationField} text="Add More" />
    </Form>
  );
}
export default EducationField;
