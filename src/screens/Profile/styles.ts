import {StyleSheet} from 'react-native';
import {COLORS, ms} from '../../style';
import {fonts} from '../../utils/misc';
import {width} from '../../style/typography';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  scrollsContainer: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  profile: {
    marginHorizontal: ms(0),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: COLORS.white,
    width: '100%',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: '100%',
    marginTop: ms(1),
  },
  textInputView: {
    paddingHorizontal: ms(0),
    marginTop: ms(1),
    height: 51,
    borderRadius: 50,
    overflow: 'hidden',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.greyF3,
  },
  textInput: {
    width: '90%',
    paddingHorizontal: 15,
    flex: 1,
    color: COLORS.black,
    height: 51,
    fontSize: 14,
    fontFamily: fonts.RalewayRegular,
  },
  searchIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconcard: {
    width:70,
    paddingVertical:8,
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginLeft:5,
    elevation: 4,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  row1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: ms(0),
    marginHorizontal: ms(0),
  },
  cardDetails: {
    borderColor: '#F0F0F0',
    borderWidth: 1,
    marginHorizontal: ms(0),
    marginVertical: ms(0),
    paddingVertical: ms(0),
    shadowOffset: {width: 0, height: 0},
    shadowColor: 'black',
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 4,
    paddingHorizontal: ms(1),
    backgroundColor: COLORS.white,
    borderRadius: 20,
  },
  firstContainer: {
    // marginTop: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    width:'100%'
  },
  imageContainer: {
    alignItems: 'center',
  },
  cardContainer: {
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    paddingVertical:8,
    paddingHorizontal:15,
    marginBottom:10,
    marginLeft:10
  },
  row2:{
    flexDirection: 'row',
    flexWrap:'wrap',
    alignItems: 'center',
    marginTop: ms(0),
    width:'100%',
    
  }
});
