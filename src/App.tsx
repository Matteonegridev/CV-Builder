import { InfoSection } from "./Layout/Info";
import { Body } from "./Layout/Body";
import { Resume } from "./Layout/Resume";
import PersonalInfo from "./Components/Personal-info";
import { useState } from "react";
import { ChangeEvent } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "Full Name",
    mobile: "+XX XXX-XXXX-XXX",
    address: "4th Avenue New York",
    email: "E-mail"
  });

  function handleChange(e:ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  return (
    <Body>
      <InfoSection>
        <PersonalInfo formData={formData} setFormData={handleChange} />
      </InfoSection>
      <Resume />
    </Body>
  );
}

export default App;
