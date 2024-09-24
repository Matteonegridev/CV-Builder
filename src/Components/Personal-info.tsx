import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';

import { type PersonalData } from '../App';
import { ChangeEvent } from 'react';

type PersonalInfoProp = {
  personalData: PersonalData;
  handlePersonalData: (e: ChangeEvent<HTMLInputElement>) => void;
};

function PersonalInfo({ personalData, handlePersonalData }: PersonalInfoProp) {
  return (
    <>
      <Form>
        <Input
          label="Full Name"
          text="Enter full name"
          name="fullName"
          value={personalData.fullName}
          onChange={handlePersonalData}
        />
        <Input
          label="Position"
          text="Enter position"
          name="position"
          value={personalData.position}
          onChange={handlePersonalData}
        />
        <Input
          label="Email"
          text="Enter email"
          name="email"
          value={personalData.email}
          onChange={handlePersonalData}
        />
        <Input
          label="Mobile"
          text="Enter mobile number"
          name="mobile"
          value={personalData.mobile}
          onChange={handlePersonalData}
        />
        <Input
          label="Address"
          text="Enter address"
          name="address"
          value={personalData.address}
          onChange={handlePersonalData}
        />
      </Form>
    </>
  );
}

export default PersonalInfo;
