import { StyleSheet, Font } from '@react-pdf/renderer';
import EBGaramond from '../styleCV/font/EBGaramond-Bold.ttf';
import OSSemiBold from '../styleCV/font/OpenSans-SemiBold.ttf';
import OSItalic from '../styleCV/font/OpenSans-Italic.ttf';
import OSRegular from '../styleCV/font/OpenSans-Regular.ttf';

Font.register({
  family: 'EB Garamond',
  src: EBGaramond,
});
Font.register({
  family: 'Open Sans',
  src: OSSemiBold,
});
Font.register({
  family: 'Open Sans Regular',
  src: OSRegular,
});
Font.register({
  family: 'Open Sans SemiBold',
  src: OSSemiBold,
});
Font.register({
  family: 'Open Sans Italic',
  src: OSItalic,
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#00487C',
    fontFamily: 'EB Garamond',
    paddingBottom: 5,
  },
  positionText: {
    fontSize: 15,
    color: '#717171',
    fontFamily: 'Open Sans Regular',
  },
  subHeader: {
    fontSize: 13,
    fontWeight: 600,
    fontFamily: 'Open Sans SemiBold',
  },
  subSubHeader: {
    fontSize: 12,
    fontWeight: 'thin',
    color: '#717171',
    fontFamily: 'Open Sans Italic',
  },
  subHeaderDate: {
    fontSize: 13,
    fontWeight: 'normal',
    color: '#717171',
    fontFamily: 'Open Sans Regular',
  },
  text: {
    fontSize: 12,
    color: '#333333',
    fontWeight: 'normal',
    fontFamily: 'Open Sans Regular',
  },
  subText: {
    fontSize: 10,
    color: '#717171',
    fontFamily: 'Open Sans Regular',
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
