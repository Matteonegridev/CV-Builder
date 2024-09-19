import { Dispatch, SetStateAction, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { type EducationData } from '../App';

type EducationFieldProp = {
  educationData: EducationData[];
  setEducationData: Dispatch<SetStateAction<EducationData[]>>;
};

type EducationEntries = {
  school: string;
  title: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
};

function EducationField({
  educationData,
  setEducationData,
}: EducationFieldProp) {
  const [education, setEducation] = useState<EducationEntries>({
    school: '',
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
        name="school"
        value={education.school}
        setData={setEducation}
      />
      <Input
        label="Title"
        text="Enter title"
        name="title"
        value={education.title}
        setData={setEducation}
      />
      <Input
        label="Field of Study"
        text="Enter field"
        name="fieldOfStudy"
        value={education.fieldOfStudy}
        setData={setEducation}
      />
      <Input
        label="Location"
        text="Enter Location"
        name="location"
        value={education.location}
        setData={setEducation}
      />
      <Input
        label="Start Date"
        text="Enter Start Date"
        name="startDate"
        value={education.startDate}
        setData={setEducation}
      />
      <Input
        label="End Date"
        text="Enter End Date"
        name="endDate"
        value={education.endDate}
        setData={setEducation}
      />
    </Form>
  );
}

export default EducationField;
