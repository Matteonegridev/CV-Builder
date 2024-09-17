import { useState } from 'react';
import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';
import { ChangeEvent } from 'react';

import { type PersonalData } from '../App';

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
            id="fullName"
            value={personalData.fullName}
            label="Full Name"
            text={personalData.fullName}
            name="fullName"
            onChange={handleChangePersonal}
          />
          <Input
            id="position"
            value={personalData.position}
            label="Position"
            text={personalData.position}
            name="position"
            onChange={handleChangePersonal}
          />
          <Input
            id="email"
            value={personalData.email}
            label="Email"
            text={personalData.email}
            name="email"
            onChange={handleChangePersonal}
          />
          <Input
            id="mobile"
            value={personalData.mobile}
            label="Mobile"
            text={personalData.mobile}
            name="mobile"
            onChange={handleChangePersonal}
          />
          <Input
            id="address"
            value={personalData.address}
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
