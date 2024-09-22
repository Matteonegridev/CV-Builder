import { ChangeEvent, SetStateAction } from 'react';
import { type ExperienceData } from '../App';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { Textarea } from '../Utils/Inputs';
import { AddButton, IsCollapsedButton, RemoveButton } from '../Utils/Buttons';

type T = {
  id: string;
  companyName: string;
  position: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  isCollapsed: boolean;
};

type ExperienceFieldProp = {
  experienceData: ExperienceData;
  setExperienceData: React.Dispatch<React.SetStateAction<T[]>>;
  addExperienceField: () => void;
  handleChange: (
    index: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<SetStateAction<T[]>>,
  ) => void;
};

function ExperienceField({
  experienceData,
  addExperienceField,
  setExperienceData,
  handleChange,
}: ExperienceFieldProp) {
  const className =
    'rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-700 ~text-xs/lg';
  return (
    <Form>
      {experienceData.map((exp) => (
        <div key={exp.id} className="mb-4">
          <div className="flex items-center justify-between">
            <IsCollapsedButton
              className={
                exp.isCollapsed
                  ? `${className} + bg-red-500 hover:bg-red-700`
                  : className
              }
              id={exp.id}
              setAll={setExperienceData}
              text={exp.isCollapsed ? 'Edit' : 'Save'}
            />
            <RemoveButton
              text="Remove Experience"
              setAll={setExperienceData}
              id={exp.id}
            />
          </div>
          {!exp.isCollapsed && (
            <>
              <Input
                label="Position"
                name="position"
                onChange={(e) => handleChange(exp.id, e, setExperienceData)}
                text="Enter your Position"
                value={exp.position}
              />
              <Input
                label="Company Name"
                name="companyName"
                onChange={(e) => handleChange(exp.id, e, setExperienceData)}
                text="Enter Company Name"
                value={exp.companyName}
              />
              <Input
                label="Location"
                name="location"
                onChange={(e) => handleChange(exp.id, e, setExperienceData)}
                text="Enter Location"
                value={exp.location}
              />
              <Input
                label="Start Date"
                name="startDate"
                onChange={(e) => handleChange(exp.id, e, setExperienceData)}
                text="Start Date"
                value={exp.startDate}
              />
              <Input
                label="End Date or Current"
                name="endDate"
                onChange={(e) => handleChange(exp.id, e, setExperienceData)}
                text="End Date"
                value={exp.endDate}
              />
              <Textarea
                label="Describe your position"
                name="description"
                onChange={(e) => handleChange(exp.id, e, setExperienceData)}
                value={exp.description}
              />
            </>
          )}
        </div>
      ))}
      <AddButton onClick={addExperienceField} text="Experience" />
    </Form>
  );
}

export default ExperienceField;
