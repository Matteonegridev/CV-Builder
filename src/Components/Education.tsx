import { Dispatch, SetStateAction, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { type EducationData } from '../App';

type EducationFieldProp = {
  educationData: EducationData[];
  setEducationData: Dispatch<SetStateAction<EducationData[]>>;
};

function EducationField({
  educationData,
  setEducationData,
}: EducationFieldProp) {
  const [educationEntries, setEducationEntries] = useState({
    schoolName: '',
    title: '',
    fieldOfStudy: '',
    startDate: '',
    endDate: '',
    location: '',
  });

  return (
    <Form>
      <Input
        label="School Name"
        text="Enter school name"
        name="schoolName"
        value={educationEntries.schoolName}
        setData={setEducationEntries}
      />
    </Form>
  );
}

export default EducationField;
