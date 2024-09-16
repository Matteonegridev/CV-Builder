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

function App() {
  const [personalData, setPersonalData] = useState({
    fullName: 'Full Name',
    mobile: '+XX XXX-XXXX-XXX',
    address: '4th Avenue New York',
    email: 'E-mail',
  });
  const [experienceData, setExperienceData] = useState({
    companyName: 'Company',
    position: 'Position',
    startDate: 'Start Date',
    endDate: 'End Date or Current',
    description: '',
  });
  const [educationData, setEducationData] = useState({
    schoolName: 'School',
    title: 'Title',
    location: 'Location:',
    startDate: 'Start Date',
    endDate: 'End Date or Current',
  });
  const [skillsData, setSkillsData] = useState({
    skills: '',
  });

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

  function handleChangeEducation(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setEducationData((prev) => ({
      ...prev,
      [name]: value,
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
          educationData={educationData}
          handleChangeEducation={handleChangeEducation}
        />
        <SkillsField
          skillsData={skillsData}
          handleChangeSkills={handleChangeSkills}
        />
      </InfoSection>
      <Resume>
        <CurriculumVitae personalData={personalData} />
      </Resume>
    </Body>
  );
}

export default App;
