import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';

type EducationData = {
  schoolName: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
};

type EducationFieldProp = {
  educationData: EducationData;
  handleChangeEducation: (e: ChangeEvent<HTMLInputElement>) => void;
};

function EducationField({
  educationData,
  handleChangeEducation,
}: EducationFieldProp): JSX.Element {
  const [edit, setEdit] = useState(false);

  return (
    <Form edit={edit} setEdit={setEdit}>
      <button className="self-center justify-self-center rounded-md bg-blue-500 px-5 py-2 text-white ~text-base/xl">
        {edit ? 'Edit' : 'Save'} Education Info
      </button>
      <Input
        label="School Name"
        name="schoolName"
        onChange={handleChangeEducation}
        text={educationData.schoolName}
      />
      <Input
        label="Title"
        name="title"
        onChange={handleChangeEducation}
        text={educationData.title}
      />
      <Input
        label="Location"
        name="lacation"
        onChange={handleChangeEducation}
        text={educationData.location}
      />
      <Input
        label="Start Date"
        name="startDate"
        onChange={handleChangeEducation}
        text={educationData.startDate}
      />
      <Input
        label="End Date"
        name="endDate"
        onChange={handleChangeEducation}
        text={educationData.endDate}
      />
    </Form>
  );
}

export default EducationField;
