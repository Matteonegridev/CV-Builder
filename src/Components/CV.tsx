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
    <div className="mt-3" key={exp.id}>
      <div className="flex items-center justify-between">
        <h5 className="font-headings font-medium ~text-lg/2xl">
          {exp.position || 'Your Position'}
        </h5>
        <div className="font-headings font-medium ~text-lg/xl">
          <p>
            {exp.startDate || 'Start Date'} -{' '}
            <span>{exp.endDate || 'End Date'}</span>
          </p>
        </div>
      </div>
      <div>
        <h6 className="font-paragraph font-semibold ~text-base/lg">
          {exp.companyName || 'Company Name'},{' '}
          <span> {exp.location || 'Location'}</span>
        </h6>
      </div>
      <p className="w-[100ch] text-pretty font-paragraph ~text-sm/lg">
        {exp.description || 'Add a Description'}
      </p>
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
        <div className="font flex justify-around border-b border-gray-500 p-4 [&>p]:font-paragraph [&>p]:text-secondSubtext [&>p]:~text-xs/lg">
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
