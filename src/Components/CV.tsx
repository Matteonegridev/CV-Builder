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
    <div className="mt-3" key={edu.id}>
      <h6 className="font-headings font-medium ~text-lg/2xl">
        {edu.title || 'Title'}
      </h6>
      <p className="font-paragraph ~text-base/xl">
        {edu.schoolName || 'Your School'},{' '}
        <span> {edu.location || 'Location'}</span>{' '}
      </p>

      <p className="font-paragraph text-secondSubtext ~text-sm/base">
        {edu.startDate || 'Start Date'} -{' '}
        <span>{edu.endDate || 'End Date or Current'}</span>
      </p>
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
        <div className="flex items-center justify-between p-4 pb-7 pt-7">
          <h1 className="font-headings font-bold ~text-2xl/5xl">
            {personalData.fullName || 'Matteo Negri'}
          </h1>
          <p className="font-paragraph ~text-sm/lg">
            {personalData.position || 'Web Developer'}
          </p>
        </div>
        <div className="font [&>p]:font-paragraph flex justify-around border-b border-gray-500 p-4 [&>p]:text-secondSubtext [&>p]:~text-xs/lg">
          <p>{personalData.email || 'email@domain.com'}</p>
          <p>{personalData.mobile || '+xx-xxx-xxxx-xxx'}</p>
          <p>{personalData.address || 'Los Santos, San Andreas'}</p>
        </div>
      </div>
      <h1 className="section-heading">Education</h1>
      {educationFields}
      <h1 className="section-heading">Work Experience</h1>
      {experienceFields}
    </>
  );
}

export default CurriculumView;
