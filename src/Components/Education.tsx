import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { v4 as uuidv4 } from 'uuid';

import { type EducationData } from '../App';

type EducationFieldProp = {
  educationData: EducationData[];
  // setEducationData: (data: EducationData[]) => void;
  handleChangeEducation: (e: ChangeEvent<HTMLInputElement>) => void;
  handleAddEducation: () => void;
};

function EducationField({
  educationData,
  // setEducationData,
  handleChangeEducation,
  handleAddEducation,
}: EducationFieldProp): JSX.Element {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <Form edit={edit} setEdit={setEdit}>
        <button className="self-center justify-self-center rounded-md bg-blue-500 px-5 py-2 text-white ~text-base/xl">
          {edit ? 'Edit' : 'Save'} Education Info
        </button>
        <Input
          id={uuidv4()}
          value={educationData[0].schoolName}
          label="School Name"
          name="schoolName"
          onChange={(e) => handleChangeEducation(e)}
          text={educationData[0].schoolName}
        />
        <Input
          id={uuidv4()}
          value={educationData[0].title}
          label="Title"
          name="title"
          onChange={(e) => handleChangeEducation(e)}
          text={educationData[0].title}
        />
        <Input
          value={educationData[0].location}
          id={uuidv4()}
          label="Location"
          name="location"
          onChange={(e) => handleChangeEducation(e)}
          text={educationData[0].location}
        />
        <Input
          value={educationData[0].startDate}
          id={uuidv4()}
          label="Start Date"
          name="startDate"
          onChange={(e) => handleChangeEducation(e)}
          text={educationData[0].startDate}
        />
        <Input
          value={educationData[0].endDate}
          id={uuidv4()}
          label="End Date"
          name="endDate"
          onChange={(e) => handleChangeEducation(e)}
          text={educationData[0].endDate}
        />
        <button
          className="text-black"
          type="button"
          onClick={handleAddEducation}
        >
          Add Education
        </button>
      </Form>
    </>
  );
}

export default EducationField;
