import {StyleSheet} from 'react-native';
import {COLORS} from '../../style';
export const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  modalContain: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successmodalContain: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  reportContain: {
    backgroundColor: COLORS.white,
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 25,
    borderRadius: 10,
  },
  report2Contain: {
    backgroundColor: COLORS.white,
    width: '100%',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  textContain: {
    paddingHorizontal: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    
    // justifyContent:'space-evenly'
  },
  buttonView: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
