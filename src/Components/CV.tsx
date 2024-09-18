import { type PersonalData, EducationData } from '../App';

type CurriculumViewProp = {
  personalData: PersonalData;
  educationData: EducationData;
};

function CurriculumView({ personalData, educationData }: CurriculumViewProp) {
  const educationArrayMap = educationData.map((edu) => (
    <div key={edu.id}>
      <p>{edu.schoolName || 'Your School'}</p>
      <p>{edu.location || 'Location'}</p>
      <p>{edu.title || 'Title'}</p>
      <p>{edu.startDate || 'Start Date'}</p>
      <p>{edu.endDate || 'End Date or Current'}</p>
    </div>
  ));
  return (
    <>
      <div>
        <h1>{personalData.fullName}</h1>
        <p>{personalData.position}</p>
        <p>{personalData.email}</p>
        <p>{personalData.mobile}</p>
        <p>{personalData.address}</p>
      </div>
      <h1 className="text-4xl">Education</h1>
      {educationArrayMap}
    </>
  );
}

export default CurriculumView;
