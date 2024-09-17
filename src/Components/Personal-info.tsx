import { Form } from '../Utils/Form';
import { Input } from '../Utils/Inputs';

import { type PersonalData } from '../App';

type PersonalInfoProp = {
  personalData: PersonalData[];
};

function PersonalInfo({ personalData }: PersonalInfoProp) {
  return (
    <>
      <Form>
        {personalData.map((v, i) => (
          <Input
            key={i}
            label="Full Name"
            id={`full-name${i}`}
            text="Full Name"
            name="fullName"
            value={v.fullName}
          />
        ))}
      </Form>
    </>
  );
}

export default PersonalInfo;
