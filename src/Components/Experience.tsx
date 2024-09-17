import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { Textarea } from '../Utils/Inputs';

import { type ExperienceData } from '../App';

type ExperienceFieldProp = {
  experienceData: ExperienceData[];
  handleChangeExperience: (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => void;
};
function ExperienceField({
  experienceData,
  handleChangeExperience,
}: ExperienceFieldProp) {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <Form edit={edit} setEdit={setEdit}>
      <button className="self-center justify-self-center rounded-md bg-blue-500 px-5 py-2 text-white ~text-base/xl">
        {edit ? 'Edit' : 'Save'} Experience Info
      </button>
      <Input
        id="company-name"
        value={experienceData[0].companyName}
        label="Company Name"
        text={experienceData[0].companyName}
        name="companyName"
        onChange={handleChangeExperience}
      />
      <Input
        id="position"
        value={experienceData[0].position}
        label="Position"
        text={experienceData[0].position}
        name="position"
        onChange={handleChangeExperience}
      />
      <Input
        id="startDate"
        value={experienceData[0].startDate}
        label="Start Date"
        text={experienceData[0].startDate}
        name="startDate"
        onChange={handleChangeExperience}
      />
      <Input
        id="endDate"
        value={experienceData[0].endDate}
        label="End Date"
        text={experienceData[0].endDate}
        name="endDate"
        onChange={handleChangeExperience}
      />
      <Textarea
        label="Position Info"
        value={experienceData[0].description}
        name="description"
        onChange={handleChangeExperience}
      />
    </Form>
  );
}

export default ExperienceField;
