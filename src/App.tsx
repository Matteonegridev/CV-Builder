import { InfoSection } from "./Layout/Info";
import { Body } from "./Layout/Body";
import { Resume } from "./Layout/Resume";
import PersonalInfo from "./Components/Personal-info";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    fullName: "Full Name",
    mobile: "+XX XXX-XXXX-XXX",
    address: "",
    email: "",
  });

  function handleChangeData(e) {
    setFormData(e.target.value);
  }

  return (
    <Body>
      <InfoSection>
        <PersonalInfo formData={formData} />
      </InfoSection>
      <Resume />
    </Body>
  );
}

export default App;
