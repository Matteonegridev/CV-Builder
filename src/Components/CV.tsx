import { type PersonalData, EducationData } from '../App';

type CurriculumViewProp = {
  personalData: PersonalData;
  educationData: EducationData;
};

function CurriculumView({ personalData, educationData }: CurriculumViewProp) {
  const educationArrayMap = educationData.map((edu) => (
    <div key={edu.id}>
      <h1>{edu.schoolName}</h1>
      <p>{edu.location}</p>
      <p>{edu.title}</p>
      <p>{edu.startDate}</p>
      <p>{edu.endDate}</p>
    </div>
  ));
  return (
    <>
      <div>
        <h1>{personalData[0].fullName}</h1>
        <p>{personalData[0].position}</p>
        <p>{personalData[0].email}</p>
        <p>{personalData[0].mobile}</p>
        <p>{personalData[0].address}</p>
      </div>
      {educationArrayMap}
    </>
  );
}

export default CurriculumView;
