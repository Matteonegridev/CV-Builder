type PersonalData = {
  fullName: string;
  mobile: string;
  address: string;
  email: string;
};

type PersonalInfoProps = {
  personalData: PersonalData;
};

function CurriculumVitae({ personalData }: PersonalInfoProps) {
  return (
    <>
      <h1>{personalData.fullName}</h1>
      <p>{personalData.mobile}</p>
      <p>{personalData.email}</p>
      <p>{personalData.address}</p>
    </>
  );
}

export default CurriculumVitae;
