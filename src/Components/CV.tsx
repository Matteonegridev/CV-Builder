import { type PersonalData } from '../App';
import { type ExperienceData } from '../App';
import { type EducationData } from '../App';
import { type SkillsData } from '../App';

type CVProps = {
  personalData: PersonalData;
  experienceData: ExperienceData[];
  educationData: EducationData[];
  skillsData: SkillsData[];
};

function CurriculumVitae({ personalData, educationData }: CVProps) {
  return (
    <>
      <div className="p-7">
        <div className="pb-7 pt-10">
          <h1 className="font-bold ~text-3xl/5xl">{personalData.fullName}</h1>
          <p className="mt-5 w-[20ch] ~text-base/lg">{personalData.position}</p>
        </div>
        <div className="flex justify-around p-4 ~text-xs/lg [&>p]:text-slate-400">
          <p>{personalData.email}</p>
          <p>{personalData.mobile}</p>
          <p>{personalData.address}</p>
        </div>
        <hr />

        {/* Experience Section */}
        <div className="mt-10">
          <h2 className="text-xl font-bold">Education</h2>
          <ul className="mt-5">
            {educationData.map((edu, index) => (
              <li key={index} className="mb-3">
                <h3 className="font-semibold">
                  {edu.schoolName} at {edu.location}
                </h3>
                <p className="text-sm">
                  {edu.startDate} - {edu.endDate}
                </p>
                <p className="text-sm">{edu.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default CurriculumVitae;
