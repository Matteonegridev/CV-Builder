import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
import EducationField from './Components/Education';
// import ExperienceField from './Components/Experience';
// import SkillsField from './Components/Skills';
import CurriculumView from './Components/CV';
import { v4 as uuidv4 } from 'uuid';

import { ChangeEvent, useState } from 'react';

export type PersonalData = {
  fullName: string;
  position: string;
  mobile: string;
  address: string;
  email: string;
}[];

export type EducationData = {
  id: string;
  schoolName: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
}[];

export type ExperienceData = {
  id: string;
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
}[];

export type SkillsData = {
  id: string;
  skills: string;
}[];

function App() {
  const [personalData, setPersonalData] = useState([
    {
      fullName: 'Negri Matteo',
      position: '',
      mobile: '',
      address: '',
      email: '',
    },
  ]);

  function handlePersonalData(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPersonalData((prev) => {
      const updatedData = [...prev];
      updatedData[0] = { ...updatedData[0], [name]: value };
      return updatedData;
    });
  }

  const [educationData, setEducationData] = useState<EducationData>([
    {
      id: uuidv4(),
      schoolName: 'Federico II',
      title: '',
      location: '',
      startDate: '',
      endDate: '',
    },
  ]);

  function handleEducationData(e: ChangeEvent<HTMLInputElement>) {
    const { value, name } = e.target;
    setEducationData((prev) => {
      const updatedData = [...prev];
      updatedData[0] = { ...updatedData[0], [name]: value };
      return updatedData;
    });
  }

  // const [experienceData, setExperienceData] = useState<ExperienceData[]>([
  //   {
  //     companyName: '',
  //     position: '',
  //     startDate: '',
  //     endDate: '',
  //     description: '',
  //   },
  // ]);

  // const [skillsData, setSkillsData] = useState([]);

  return (
    <Body>
      <InfoSection>
        <PersonalInfo
          personalData={personalData}
          handlePersonalData={handlePersonalData}
        />
        <EducationField
          setEducationData={setEducationData}
          educationData={educationData}
          handleEducationData={handleEducationData}
        />
      </InfoSection>
      <Resume>
        <CurriculumView
          personalData={personalData}
          educationData={educationData}
        />
      </Resume>
    </Body>
  );
}

export default App;
