import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
import EducationField from './Components/Education';
import ExperienceField from './Components/Experience';
import SkillsField from './Components/Skills';
import CurriculumView from './Components/CV';
import { ChangeEvent, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PDFViewer } from '@react-pdf/renderer';

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
  isCollapsed: boolean;
}[];

export type ExperienceData = {
  id: string;
  companyName: string;
  position: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  isCollapsed: boolean;
}[];

export type SkillsData = {
  id: string;
  skills: string;
  description: string;
  isCollapsed: boolean;
}[];

function App() {
  // Initializer function to load from localStorage or set default
  const loadData = <T,>(key: string, defaultValue: T): T => {
    const savedData = localStorage.getItem(key);
    return savedData ? JSON.parse(savedData) : defaultValue;
  };

  // PERSONAL DATA:
  const [personalData, setPersonalData] = useState(() =>
    loadData('personalData', {
      fullName: '',
      position: '',
      mobile: '',
      address: '',
      email: '',
    }),
  );

  function handlePersonalData(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setPersonalData((prev: typeof personalData) => ({
      ...prev,
      [name]: value,
    }));
  }

  // EDUCATION DATA:
  const [educationData, setEducationData] = useState(() =>
    loadData('educationData', [
      {
        id: uuidv4(),
        schoolName: '',
        title: '',
        location: '',
        startDate: '',
        endDate: '',
        isCollapsed: true,
      },
    ]),
  );

  function addEducationField() {
    setEducationData((prev: typeof educationData) => [
      ...prev,
      {
        id: uuidv4(),
        schoolName: '',
        title: '',
        field: '',
        location: '',
        startDate: '',
        endDate: '',
        isCollapsed: true,
      },
    ]);
  }

  // EXPERIENCE DATA:
  const [experienceData, setExperienceData] = useState(() =>
    loadData('experienceData', [
      {
        id: uuidv4(),
        companyName: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
        isCollapsed: true,
      },
    ]),
  );

  function addExperienceField() {
    setExperienceData((prev: typeof experienceData) => [
      ...prev,
      {
        id: uuidv4(),
        companyName: '',
        position: '',
        location: '',
        startDate: '',
        endDate: '',
        description: '',
        isCollapsed: true,
      },
    ]);
  }

  // SKILLS DATA:
  const [skillsData, setSkillsData] = useState(() =>
    loadData('skillsData', [
      {
        id: uuidv4(),
        skills: '',
        description: '',
        isCollapsed: true,
      },
    ]),
  );

  function addSkillsField() {
    setSkillsData([
      ...skillsData,
      {
        id: uuidv4(),
        skills: '',
        description: '',
        isCollapsed: true,
      },
    ]);
  }

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('personalData', JSON.stringify(personalData));
    localStorage.setItem('educationData', JSON.stringify(educationData));
    localStorage.setItem('experienceData', JSON.stringify(experienceData));
    localStorage.setItem('skillsData', JSON.stringify(skillsData));
  }, [personalData, educationData, experienceData, skillsData]);

  // handleChange for all states:
  function handleChange<T extends { id?: string }>(
    index: string,
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    // setState is a parameter that takes all of the set*  of states I need to change:
    setState: React.Dispatch<React.SetStateAction<T[]>>,
  ) {
    const { name, value } = e.target;
    setState((prev) =>
      prev.map((item) =>
        item.id === index ? { ...item, [name]: value } : item,
      ),
    );
  }

  return (
    <Body>
      <InfoSection>
        <PersonalInfo
          personalData={personalData}
          handlePersonalData={handlePersonalData}
        />
        <ExperienceField
          addExperienceField={addExperienceField}
          experienceData={experienceData}
          handleChange={handleChange}
          setExperienceData={setExperienceData}
        />
        <EducationField
          setEducationData={setEducationData}
          educationData={educationData}
          addEducationField={addEducationField}
          handleChange={handleChange}
        />
        <SkillsField
          addSkillsField={addSkillsField}
          handleChange={handleChange}
          setSkillsData={setSkillsData}
          skillsData={skillsData}
        />
      </InfoSection>
      <Resume>
        <PDFViewer width="100%" height="100%">
          <CurriculumView
            personalData={personalData}
            educationData={educationData}
            experienceData={experienceData}
            skillsData={skillsData}
          />
        </PDFViewer>
      </Resume>
    </Body>
  );
}

export default App;
