import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
// import ExperienceField from './Components/Experience';
// import EducationField from './Components/Education';
// import SkillsField from './Components/Skills';

import { useState } from 'react';

export type PersonalData = {
  fullName: string;
  position: string;
  mobile: string;
  address: string;
  email: string;
};

export type ExperienceData = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationData = {
  schoolName: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
};

export type SkillsData = {
  skills: string[];
};

function App() {
  const [personalData, setPersonalData] = useState([
    { fullName: '', position: '', mobile: '', address: '', email: '' },
  ]);

  // const [experienceData, setExperienceData] = useState<ExperienceData[]>([
  //   {
  //     companyName: '',
  //     position: '',
  //     startDate: '',
  //     endDate: '',
  //     description: '',
  //   },
  // ]);
  // const [educationData, setEducationData] = useState<EducationData[]>([
  //   {
  //     schoolName: '',
  //     title: '',
  //     location: '',
  //     startDate: '',
  //     endDate: '',
  //   },
  // ]);
  // const [skillsData, setSkillsData] = useState([]);

  return (
    <Body>
      <InfoSection>
        <PersonalInfo personalData={personalData} />
      </InfoSection>
      <Resume children={undefined}></Resume>
    </Body>
  );
}

export default App;
