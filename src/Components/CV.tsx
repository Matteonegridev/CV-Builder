import { type PersonalData, EducationData, ExperienceData } from '../App';

type CurriculumViewProp = {
  personalData: PersonalData;
  educationData: EducationData;
  experienceData: ExperienceData;
};

function CurriculumView({
  personalData,
  educationData,
  experienceData,
}: CurriculumViewProp) {
  const educationFields = educationData.map((edu) => (
    <div key={edu.id}>
      <p>{edu.schoolName || 'Your School'}</p>
      <p>{edu.title || 'Title'}</p>
      <p>{edu.field || 'Field of Study'}</p>
      <p>{edu.location || 'Location'}</p>
      <p>{edu.startDate || 'Start Date'}</p>
      <p>{edu.endDate || 'End Date or Current'}</p>
    </div>
  ));
  const experienceFields = experienceData.map((exp) => (
    <div key={exp.id}>
      <p>{exp.companyName || 'Company Name'}</p>
      <p>{exp.position || 'Your Position'}</p>
      <p>{exp.startDate || 'Start Date'}</p>
      <p>{exp.endDate || 'End Date'}</p>
      <p>{exp.location || 'Location'}</p>
      <p>{exp.description || 'Add a Description'}</p>
    </div>
  ));
  return (
    <>
      <div>
        <h1>{personalData.fullName || 'Matteo Negri'}</h1>
        <p>{personalData.position || 'Web Developer'}</p>
        <p>{personalData.email || 'email@domain.com'}</p>
        <p>{personalData.mobile || '+xx-xxx-xxxx-xxx'}</p>
        <p>{personalData.address || 'Los Santos, San Andreas'}</p>
      </div>
      <h1 className="text-4xl">Education</h1>
      {educationFields}
      {experienceFields}
    </>
  );
}

export default CurriculumView;
