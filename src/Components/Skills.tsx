import { Form } from '../Utils/Form';
import { Input, Textarea } from '../Utils/Inputs';
import { type SkillsData } from '../App';
import { ChangeEvent, SetStateAction } from 'react';
import { AddButton } from '../Utils/Buttons';

type T = {
  id: string;
  skills: string;
  description: string;
};

type SkillsFieldProp = {
  skillsData: SkillsData;
  setSkillsData: React.Dispatch<SetStateAction<T[]>>;
  handleChange: (
    index: string,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setState: React.Dispatch<React.SetStateAction<T[]>>,
  ) => void;
  addSkillsField: () => void;
};

function SkillsField({
  skillsData,
  setSkillsData,
  handleChange,
  addSkillsField,
}: SkillsFieldProp) {
  return (
    <Form>
      {skillsData.map((skills) => (
        <div key={skills.id} className="mb-4">
          <Input
            label="Skills"
            name="skills"
            onChange={(e) => handleChange(skills.id, e, setSkillsData)}
            text="Enter Skills"
            value={skills.skills}
          />
          <Textarea
            label="Describe your skill"
            name="description"
            onChange={(e) => handleChange(skills.id, e, setSkillsData)}
            value={skills.description}
          />
        </div>
      ))}
      <AddButton onClick={addSkillsField} text="Skill" />
    </Form>
  );
}

export default SkillsField;
