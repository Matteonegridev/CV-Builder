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
          <div className="pb-7 pt-10">
            <h1 className="font-bold ~text-3xl/5xl">
              {educationData[0].schoolName}
            </h1>
            <p className="mt-5 w-[20ch] ~text-base/lg">
              {educationData[0].title}
            </p>
          </div>
          <div className="flex justify-around p-4 ~text-xs/lg [&>p]:text-slate-400">
            <p>{educationData[0].location}</p>
            <p>{educationData[0].startDate}</p>
            <p>{educationData[0].endDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurriculumVitae;
