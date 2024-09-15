import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { Textarea } from '../Utils/Inputs';

type ExperienceData = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};
type ExperienceFieldProp = {
  experienceData: ExperienceData;
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
      <button className="bg-blue-500 py-2 px-5 rounded-md text-white ~text-base/xl justify-self-center self-center">
        {edit ? 'Edit' : 'Save'} Experience Info
      </button>
      <Input
        label="Company Name"
        text={experienceData.companyName}
        name="company-name"
        onChange={handleChangeExperience}
      />
      <Input
        label="Position"
        text={experienceData.position}
        name="position"
        onChange={handleChangeExperience}
      />
      <Input
        label="Start Date"
        text={experienceData.startDate}
        name="start-date"
        onChange={handleChangeExperience}
      />
      <Input
        label="End Date"
        text={experienceData.endDate}
        name="end-date"
        onChange={handleChangeExperience}
      />
      <Textarea
        label="Position Info"
        value={experienceData.description}
        name="description"
        onChange={handleChangeExperience}
      />
    </Form>
  );
}

export default ExperienceField;
