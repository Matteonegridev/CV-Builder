import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Textarea } from '../Utils/Inputs';

import { type SkillsData } from '../App';

type SkillsDataProp = {
  skillsData: SkillsData[];
  handleChangeSkills: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};

function SkillsField({
  skillsData,
  handleChangeSkills,
}: SkillsDataProp): JSX.Element {
  const [edit, setEdit] = useState(false);

  return (
    <Form edit={edit} setEdit={setEdit}>
      <button className="self-center justify-self-center rounded-md bg-blue-500 px-5 py-2 text-white ~text-base/xl">
        {edit ? 'Edit' : 'Save'} Skills Info
      </button>
      <Textarea
        label="Skills"
        name="skills"
        onChange={handleChangeSkills}
        value={skillsData[0].skills}
      />
    </Form>
  );
}

export default SkillsField;
