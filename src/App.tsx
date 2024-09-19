import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfoField from './Components/Personal-info';
import EducationField from './Components/Education';
import CurriculumView from './Components/CV';
import { useState } from 'react';

export type PersonalData = {
  fullName: string;
  position: string;
  mobile: string;
  address: string;
  email: string;
};

export type EducationData = {
  school: string;
  title: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  location: string;
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
  const [personalData, setPersonalData] = useState({
    fullName: '',
    position: '',
    mobile: '',
    address: '',
    email: '',
  });

  const [educationData, setEducationData] = useState<EducationData[]>([]);

  // const [experienceData, setExperienceData] = useState<ExperienceData>([]);
  // const [skillsData, setSkillsData] = useState([]);

  return (
    <Body>
      <InfoSection>
        <PersonalInfoField
          personalData={personalData}
          setPersonalData={setPersonalData}
        />
        <EducationField
          educationData={educationData}
          setEducationData={setEducationData}
        />
      </InfoSection>
      <Resume>
        <CurriculumView
          educationData={educationData}
          personalData={personalData}
        />
      </Resume>
    </Body>
  );
}

export default App;
