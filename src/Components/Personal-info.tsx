import { useState } from 'react';

type FormData = {
  fullName: string;
  mobile: string;
  address: string;
  email: string;
};

type PersonalInfoProps = {
  formData: FormData;
};

function PersonalInfo({ formData }: PersonalInfoProps) {
  const [edit, setEdit] = useState(false);

  return (
    <>
      <form
  className={`flex flex-col gap-4 shadow-md p-6 transition-all ease-in-out duration-500 overflow-hidden ${
    edit ? 'max-h-20' : 'max-h-[600px]'
  }`}
  onSubmit={(e) => {
    e.preventDefault();
    setEdit(!edit);
  }}
>
  <button className="bg-blue-500 py-2 px-5 rounded-md text-white ~text-base/xl justify-self-center self-center">
    {edit ? 'Edit' : 'Save'} Personal Info
  </button>

  {/* Form inputs container with transition */}
  <div className="flex flex-col gap-4">
    <div className="flex flex-col">
      <label className="~text-base/xl">Full Name</label>
      <input className="border py-2 px-2" placeholder={formData.fullName} />
    </div>
    <div className="flex flex-col">
      <label className="~text-base/xl">Email</label>
      <input className="border py-2 px-2" placeholder={formData.email} />
    </div>
    <div className="flex flex-col">
      <label className="~text-base/xl">Mobile</label>
      <input className="border py-2 px-2" placeholder={formData.mobile} />
    </div>
    <div className="flex flex-col">
      <label className="~text-base/xl">Address</label>
      <input className="border py-2 px-2" placeholder={formData.address} />
    </div>
  </div>
</form>


    </>
  );
}

export default PersonalInfo;
