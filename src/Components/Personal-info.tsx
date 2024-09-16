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
  handleChangePersonal: (e: ChangeEvent<HTMLInputElement>) => void;
};

function PersonalInfo({
  personalData,
  handleChangePersonal,
}: PersonalInfoProps): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <>
      <Form edit={edit} setEdit={setEdit}>
        <button className="self-center justify-self-center rounded-md bg-blue-500 px-5 py-2 text-white ~text-base/xl">
          {edit ? 'Edit' : 'Save'} Personal Info
        </button>
        <div className="flex flex-col gap-4">
          <Input
            label="Full Name"
            text={personalData.fullName}
            name="full-name"
            onChange={handleChangePersonal}
          />
          <Input
            label="Email"
            text={personalData.email}
            name="email"
            onChange={handleChangePersonal}
          />
          <Input
            label="Mobile"
            text={personalData.mobile}
            name="mobile"
            onChange={handleChangePersonal}
          />
          <Input
            label="Address"
            text={personalData.address}
            name="address"
            onChange={handleChangePersonal}
          />
        </div>
      </Form>
    </>
  );
}

export default PersonalInfo;
