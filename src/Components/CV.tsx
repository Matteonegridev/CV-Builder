type PersonalData = {
  fullName: string;
  mobile: string;
  address: string;
  email: string;
  position: string;
};

type PersonalInfoProps = {
  personalData: PersonalData;
};

function CurriculumVitae({ personalData }: PersonalInfoProps) {
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
      </div>
    </>
  );
}

export default CurriculumVitae;
