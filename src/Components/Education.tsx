import { type EducationData } from '../App';
import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { AddButton } from '../Utils/AddButton';
import { v4 as uuidv4 } from 'uuid';

type EducationFieldProp = {
  educationData: EducationData[];
  setEducationData: React.Dispatch<React.SetStateAction<EducationData[]>>;
  handleEducationData: (e: ChangeEvent<HTMLInputElement>) => void;
};

function EducationField({
  educationData,
  setEducationData,
  handleEducationData,
}: EducationFieldProp) {
  const [eduList, setEduList] = useState<EducationData>({
    schoolName: '',
    title: '',
    location: '',
    startDate: '',
    endDate: '',
    id: '',
  });

  function addToList(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    const newList: EducationData = {
      ...eduList,
      id: uuidv4(),
    };

    setEducationData((prev) => ({ ...prev, newList }));

    setEduList({
      schoolName: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
      id: '',
    });
  }

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
        <AddButton onClick={(e) => addToList(e)} text="Education" />
      </Form>
    </>
  );
}

export default EducationField;
