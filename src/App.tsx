import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
import ExperienceField from './Components/Experience';
import EducationField from './Components/Education';
import SkillsField from './Components/Skills';
import CurriculumVitae from './Components/CV';
import { useState } from 'react';
import { ChangeEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type PersonalData = {
  fullName: string;
  position: string;
  mobile: string;
  address: string;
  email: string;
};

export type EducationData = {
  id: string;
  schoolName: string;
  title: string;
  location: string;
  startDate: string;
  endDate: string;
};

export type ExperienceData = {
  companyName: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
};
export type SkillsData = {
  skills: string;
};

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: 'Full Name',
    position: 'Position',
    mobile: '+XX XXX-XXXX-XXX',
    address: '4th Avenue New York',
    email: 'E-mail',
  });
  const [experienceData, setExperienceData] = useState([
    {
      id: uuidv4(),
      companyName: 'Company',
      position: 'Position',
      startDate: 'Start Date',
      endDate: 'End Date or Current',
      description: '',
    },
  ]);
  const [educationData, setEducationData] = useState([
    {
      id: uuidv4(),
      schoolName: 'School',
      title: 'Title',
      location: 'Location',
      startDate: 'Start Date',
      endDate: 'End Date or Current',
    },
  ]);
  const [skillsData, setSkillsData] = useState([
    {
      id: uuidv4(),
      skills: '',
    },
  ]);

  function handleChangePersonal(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPersonalData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleChangeExperience(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setExperienceData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleChangeEducation(
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ) {
    const { name, value } = e.target;
    setEducationData((prev) => ({
      ...prev,
      [name[index]]: value,
    }));
  }

  function handleChangeSkills(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setSkillsData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <Body>
      <InfoSection>
        <PersonalInfo
          personalData={personalData}
          handleChangePersonal={handleChangePersonal}
        />
        <ExperienceField
          experienceData={experienceData}
          handleChangeExperience={handleChangeExperience}
        />
        <EducationField
          setEducationData={setEducationData}
          educationData={educationData}
          handleChangeEducation={handleChangeEducation}
        />
        <SkillsField
          skillsData={skillsData}
          handleChangeSkills={handleChangeSkills}
        />
      </InfoSection>
      <Resume>
        <CurriculumVitae
          personalData={personalData}
          educationData={educationData}
          experienceData={experienceData}
          skillsData={skillsData}
        />
      </Resume>
    </Body>
  );
}

export default App;
