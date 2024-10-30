import { Document, Page, Text, View, Font } from '@react-pdf/renderer';
import { styles } from './styleCV/Style';

import {
  type PersonalData,
  EducationData,
  ExperienceData,
  SkillsData,
} from '../App';

type CurriculumViewProp = {
  personalData: PersonalData;
  educationData: EducationData;
  experienceData: ExperienceData;
  skillsData: SkillsData;
};

Font.register({
  family: 'Montserrat',
  src: 'https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD-w.ttf',
});
Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf',
});

function CurriculumView({
  personalData,
  educationData,
  experienceData,
  skillsData,
}: CurriculumViewProp) {
  const experienceFields = experienceData.map((exp) => (
    <View style={styles.section} key={exp.id}>
      <View style={styles.flexRow}>
        <Text style={styles.subHeader}>{exp.position || 'Your Position'}</Text>
        <Text style={styles.subHeaderDate}>
          {exp.startDate || 'Start Date'} - {exp.endDate || 'End Date'}
        </Text>
      </View>
      <Text style={styles.subSubHeader}>
        {exp.companyName || 'Company Name'} - {exp.location || 'Location'}
      </Text>
      <Text style={styles.text}>{exp.description || 'Add a Description'}</Text>
    </View>
  ));

  const educationFields = educationData.map((edu) => (
    <View style={styles.section} key={edu.id}>
      <Text style={styles.subHeader}>{edu.title || 'Title'}</Text>
      <Text style={styles.subSubHeader}>
        {edu.schoolName || 'Your School'} - {edu.location || 'Location'}
      </Text>
      <Text style={styles.text}>
        {edu.startDate || 'Start Date'} - {edu.endDate || 'End Date or Current'}
      </Text>
    </View>
  ));

  const skillsField = skillsData.map((skills) => (
    <View style={styles.section} key={skills.id}>
      <Text style={styles.subHeader}>{skills.skills || 'Your Skill'}</Text>
      <Text style={styles.text}>
        {skills.description || 'Add a Description'}
      </Text>
    </View>
  ));

  return (
    <Document>
      <Page style={styles.page}>
        {/* Header with Personal Information */}
        <View style={(styles.section, styles.flexRow)}>
          <Text style={styles.headerName}>
            {personalData.fullName || 'Matteo Negri'}
          </Text>
          <Text style={styles.positionText}>
            {personalData.position || 'Web Developer'}
          </Text>
        </View>
        {/* Contact Information */}
        <View
          style={[
            styles.flexRow,
            styles.borderBottom,
            styles.padding,
            styles.paddingTop,
          ]}
        >
          <Text style={styles.subText}>
            {personalData.email || 'email@domain.com'}
          </Text>
          <Text style={styles.subText}>
            {personalData.mobile || '+xx-xxx-xxxx-xxx'}
          </Text>
          <Text style={styles.subText}>
            {personalData.address || 'Los Santos, San Andreas'}
          </Text>
        </View>
        {/* Work Experience Section */}
        <View
          style={
            (styles.section, styles.paddingTop, styles.borderBottomSection)
          }
        >
          <Text style={styles.header}>Work Experience</Text>
          {experienceFields}
        </View>
        {/* Education Section */}
        <View style={(styles.section, styles.borderBottomSection)}>
          <Text style={styles.header}>Education</Text>
          {educationFields}
        </View>
        {/* Skills Section */}
        <View style={styles.section}>
          <Text style={styles.header}>Skills</Text>
          {skillsField}
        </View>
      </Page>
    </Document>
  );
}

export default CurriculumView;
