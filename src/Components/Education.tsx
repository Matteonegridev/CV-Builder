import { type EducationData } from '../App';
import { ChangeEvent, useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { AddButton } from '../Utils/AddButton';
import { v4 as uuidv4 } from 'uuid';

type EducationFieldProp = {
  educationData: EducationData;
  setEducationData: React.Dispatch<React.SetStateAction<EducationData>>;
};

function EducationField({ setEducationData }: EducationFieldProp) {
  const [newEducationData, setNewEducationData] = useState({
    id: uuidv4(),
    schoolName: '',
    title: '',
    location: '',
    startDate: '',
    endDate: '',
  });

  function handleAddEducation(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setNewEducationData((prev) => ({ ...prev, [name]: value }));
  }

  function addToList() {
    setEducationData((prev) => [...prev, newEducationData]);
    setNewEducationData({
      id: uuidv4(),
      schoolName: '',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
    });
  }

  return (
    <Form>
      <div>
        <Input
          label="School"
          name="schoolName"
          text="Insert name"
          value={newEducationData.schoolName}
          onChange={handleAddEducation}
        />
        <Input
          label="Title"
          name="title"
          text="Insert title"
          value={newEducationData.title}
          onChange={handleAddEducation}
        />
        <Input
          label="Location"
          name="location"
          text="Insert location"
          value={newEducationData.location}
          onChange={handleAddEducation}
        />
        <Input
          label="Start Date"
          name="startDate"
          text="Insert start date"
          value={newEducationData.startDate}
          onChange={handleAddEducation}
        />
        <Input
          label="End Date"
          name="endDate"
          text="Insert end date"
          value={newEducationData.endDate}
          onChange={handleAddEducation}
        />
      </div>
      <AddButton onClick={addToList} text="Education" />
    </Form>
  );
}
export default EducationField;
