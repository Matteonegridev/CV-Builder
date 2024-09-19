import { Input } from '../Utils/Inputs';
import { Form } from '../Utils/Form';

import { type PersonalData } from '../App';
import { Dispatch, SetStateAction } from 'react';

type PersonalInfoFieldProp = {
  personalData: PersonalData;
  setPersonalData: Dispatch<SetStateAction<PersonalData>>;
};

function PersonalInfoField({
  personalData,
  setPersonalData,
}: PersonalInfoFieldProp) {
  return (
    <Form>
      <Input
        label="Full Name"
        name="fullName"
        setData={setPersonalData}
        text="Enter your full name"
        value={personalData.fullName}
      />
      <Input
        label="Position"
        name="position"
        setData={setPersonalData}
        text="Position"
        value={personalData.position}
      />
      <Input
        label="Email"
        name="email"
        setData={setPersonalData}
        text="Enter your email"
        value={personalData.email}
      />
      <Input
        label="Mobile"
        name="mobile"
        setData={setPersonalData}
        text="Enter your mobile number"
        value={personalData.mobile}
      />
      <Input
        label="Address"
        name="address"
        setData={setPersonalData}
        text="Enter your address"
        value={personalData.address}
      />
    </Form>
  );
}
export default PersonalInfoField;
