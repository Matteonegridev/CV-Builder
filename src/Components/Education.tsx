import { type EducationData } from '../App';
import { ChangeEvent } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';

type EducationFieldProp = {
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
  handleEducationData: (e: ChangeEvent<HTMLInputElement>) => void;
};

function EducationField({
  educationData,
  handleEducationData,
}: EducationFieldProp) {
  return (
    <>
      <Form>
        <Input
          label="School"
          name="schoolName"
          text="Insert name"
          value={educationData[0].schoolName}
          onChange={handleEducationData}
        />
      </Form>
    </>
  );
}

export default EducationField;
