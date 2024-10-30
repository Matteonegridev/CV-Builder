import { Form } from '../Utils/Form';
import { Input, Textarea } from '../Utils/Inputs';
import { type SkillsData } from '../App';
import { ChangeEvent, SetStateAction } from 'react';
import { AddButton, IsCollapsedButton, RemoveButton } from '../Utils/Buttons';

type T = {
  id: string;
  skills: string;
  description: string;
  isCollapsed: boolean;
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
  const className =
    'bg-blue-500 px-4 py-2 text-white rounded-lg font-medium hover:bg-blue-700 ~text-xs/lg transition-all ease-in 350ms';

  return (
    <Form>
      <h3 className="mb-4 font-headings text-3xl font-semibold">Skills</h3>
      {skillsData.map((skills) => (
        <div key={skills.id} className="mb-4">
          <div className="flex items-center justify-between pb-2">
            <IsCollapsedButton
              id={skills.id}
              text={skills.isCollapsed ? 'Edit' : 'Save'}
              setAll={setSkillsData}
              className={
                skills.isCollapsed
                  ? `${className} + bg-red-500 hover:bg-red-700`
                  : className
              }
            />
            <RemoveButton
              id={skills.id}
              setAll={setSkillsData}
              text="Remove Skill"
            />
          </div>
          {skills.isCollapsed && (
            <>
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
            </>
          )}
        </div>
      ))}
      <AddButton onClick={addSkillsField} text="Skill" />
    </Form>
  );
}

export default SkillsField;
