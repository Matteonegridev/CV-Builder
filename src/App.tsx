import { InfoSection } from './Layout/Info';
import { Body } from './Layout/Body';
import { Resume } from './Layout/Resume';
import PersonalInfo from './Components/Personal-info';
import ExperienceField from './Components/Experience';
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
      </InfoSection>
      <Resume />
    </Body>
  );
}

export default App;
