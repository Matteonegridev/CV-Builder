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
          text="Full Name"
          name="fullName"
          value={personalData.fullName}
          onChange={handlePersonalData}
        />
      </Form>
    </>
  );
}

export default PersonalInfo;
