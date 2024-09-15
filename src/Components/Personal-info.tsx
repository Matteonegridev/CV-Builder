import { useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';

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
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
<Form edit={edit} setEdit={setEdit}>
  <button className="bg-blue-500 py-2 px-5 rounded-md text-white ~text-base/xl justify-self-center self-center">
    {edit ? 'Edit' : 'Save'} Personal Info
  </button>
  <div className="flex flex-col gap-4">
    <Input label='Full Name' text={formData.fullName}/>
    <Input label='Email' text={formData.email}/>
    <Input label='Mobile' text={formData.mobile}/>
    <Input label='Address' text={formData.address}/>
  </div>
</Form>
    </>
  );
}

export default PersonalInfo;