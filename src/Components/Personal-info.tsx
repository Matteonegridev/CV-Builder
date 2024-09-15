import { useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { ChangeEvent } from 'react';

type PersonalData = {
  fullName: string;
  mobile: string;
  address: string;
  email: string;
};

type PersonalInfoProps = {
  personalData: PersonalData;
  handleChangePersonal : (e: ChangeEvent<HTMLInputElement>) => void;
};


function PersonalInfo({ personalData ,handleChangePersonal }: PersonalInfoProps) {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
<Form edit={edit} setEdit={setEdit}>
  <button className="bg-blue-500 py-2 px-5 rounded-md text-white ~text-base/xl justify-self-center self-center">
    {edit ? 'Edit' : 'Save'} Personal Info
  </button>
  <div className="flex flex-col gap-4">
    <Input label='Full Name' text={personalData.fullName} name='full-name' onChange={handleChangePersonal}/>
    <Input label='Email' text={personalData.email} name='email' onChange={handleChangePersonal}/>
    <Input label='Mobile' text={personalData.mobile} name='mobile' onChange={handleChangePersonal}/>
    <Input label='Address' text={personalData.address} name='address' onChange={handleChangePersonal}/>
  </div>
</Form>
    </>
  );
}

export default PersonalInfo;