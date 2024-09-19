import { type PersonalData, EducationData } from '../App';

type CurriculumViewProp = {
  personalData: PersonalData;
  educationData: EducationData[];
};

function CurriculumView({ personalData, educationData }: CurriculumViewProp) {
  const educationArrayMap = educationData.map((value, index) => (
    <div key={index}>
      <p>{value.schoolName || 'Your School'}</p>
      <p>{value.title || 'Title'}</p>
      <p>{value.fieldOfStudy || 'Field of Study'}</p>
      <p>{value.location || 'Location'}</p>
      <p>{value.startDate || 'Start Date'}</p>
      <p>{value.endDate || 'End Date or Current'}</p>
    </div>
  ));
  return (
    <>
      <div>
        <h1>{personalData.fullName || 'Full Name'}</h1>
        <p>{personalData.position || 'Web Developer'}</p>
        <p>{personalData.email || 'toobusycoding@code.com'}</p>
        <p>{personalData.mobile || '+xx-xxx-xxxx-xxx'}</p>
        <p>{personalData.address || 'Los Santos, San Andreas'}</p>
      </div>
      <h1 className="text-4xl">Education</h1>
      {educationArrayMap}
    </>
  );
}

export default CurriculumView;
