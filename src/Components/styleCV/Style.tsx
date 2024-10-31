import { StyleSheet, Font } from '@react-pdf/renderer';
import MyCustomFont from '../styleCV/font/EBGaramond-Bold.ttf';

Font.register({
  family: 'EB Garamond',
  src: MyCustomFont,
});
Font.register({
  family: 'Open Sans',
  src: 'https://fonts.gstatic.com/s/opensans/v18/mem8YaGs126MiZpBA-UFVZ0e.ttf',
});

export const styles = StyleSheet.create({
  page: {
    padding: 20,
    backgroundColor: '#ffffff',
  },
  section: {
    marginBottom: 15,
  },
  headerName: {
    fontSize: 36,
    color: '#00487C',
    fontFamily: 'EB Garamond',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#00487C',
    fontFamily: 'EB Garamond',
    paddingBottom: 5,
  },
  positionText: {
    fontSize: 15,
    fontWeight: 'normal',
    color: '#717171',
    fontFamily: 'Open Sans',
  },
  subHeader: {
    fontSize: 15,
    fontWeight: 'extrabold',
    fontFamily: 'Open Sans',
  },
  subSubHeader: {
    fontSize: 12,
    fontWeight: 'thin',
    color: '#717171',
    fontFamily: 'Open Sans',
  },
  subHeaderDate: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#717171',
    fontFamily: 'Open Sans',
  },
  text: {
    fontSize: 12,
    color: '#333333',
    fontFamily: 'Open Sans',
  },
  subText: {
    fontSize: 10,
    color: '#717171',
    fontFamily: 'Open Sans',
  },

  flexRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  borderBottom: {
    borderBottomWidth: 2,
    borderBottomColor: '#00487C',
    paddingBottom: 10,
    marginBottom: 10,
  },
  borderBottomSection: {
    borderBottomWidth: 1,
    borderBottomColor: '#00487C',
    paddingBottom: 10,
    marginBottom: 10,
  },
  padding: {
    padding: 15,
  },
  paddingTop: {
    paddingTop: 20,
  },
});
