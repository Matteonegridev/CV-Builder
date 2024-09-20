import { type EducationData } from '../App';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { AddButton } from '../Utils/Buttons';
import { IsCollapsedButton } from '../Utils/Buttons';

type T = {
  id: string;
  schoolName: string;
  title: string;
  field: string;
  location: string;
  startDate: string;
  endDate: string;
  isCollapsed: boolean;
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
  handleChange,
  addEducationField,
}: EducationFieldProp) {
  const className =
    'rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700';

  return (
    <Form>
      <h3 className="mb-4 text-xl font-semibold">Education</h3>
      {educationData.map((edu) => (
        <div key={edu.id} className="mb-4">
          <IsCollapsedButton
            id={edu.id}
            text={edu.isCollapsed ? 'Edit' : 'Save'}
            setAll={setEducationData}
            className={
              edu.isCollapsed
                ? `${className} + bg-red-500 hover:bg-red-700`
                : className
            }
          />
          {!edu.isCollapsed && (
            <>
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
            </>
          )}
        </div>
      ))}
      <AddButton onClick={addEducationField} text="Add More" />
    </Form>
  );
}
export default EducationField;
