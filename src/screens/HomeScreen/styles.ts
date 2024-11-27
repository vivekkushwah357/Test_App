import {StyleSheet} from 'react-native';
import {COLORS, ms} from '../../style';
import {fonts} from '../../utils/misc';
import {width} from '../../style/typography';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  TextContain:{
    flexDirection:"row",
    alignItems: 'center',
    marginHorizontal: ms(2),
    backgroundColor: COLORS.LightGreyF0F, 
    borderBottomWidth: 1,
    borderBottomColor: COLORS.MediumGrey88A,
    marginVertical: ms(0),
    paddingHorizontal: 10
  },
  TextInputContain: {
    flex: 1,
    height: 45,
    fontFamily: fonts.PoppinsRegular,
    fontSize: 14,
    color: COLORS.navy
  },
  iconBg: {
    // height: 35,
    width: 35
  },
  headerRightView: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
    marginRight: 8,
    
  },

});
