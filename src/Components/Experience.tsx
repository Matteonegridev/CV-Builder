import { ChangeEvent, SetStateAction } from 'react';
import { type ExperienceData } from '../App';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { Textarea } from '../Utils/Inputs';
import { AddButton } from '../Utils/Buttons';

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
  return (
    <Form>
      {experienceData.map((exp) => (
        <div key={exp.id} className="mb-4">
          <Input
            label="Company Name"
            name="companyName"
            onChange={(e) => handleChange(exp.id, e, setExperienceData)}
            text="Enter Company Name"
            value={exp.companyName}
          />
          <Textarea
            label="Describe your position"
            name="description"
            onChange={(e) => handleChange(exp.id, e, setExperienceData)}
            value={exp.description}
          />
        </div>
      ))}
      <AddButton onClick={addExperienceField} text="Add More" />
    </Form>
  );
}

export default ExperienceField;
