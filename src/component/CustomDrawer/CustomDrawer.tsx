import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Modal,
  Linking,
  Platform,
  LayoutAnimation,
  TouchableNativeFeedback,
} from 'react-native';
import {AuthContext} from '../auth/AuthContext';
import {COLORS, ms} from '../../style';
import AppText from '../AppText/AppText';
import {width} from '../../style/typography';
import ImgView from '../ImgView/ImgView';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import {strings} from '../../utils/strings';
import emitter from '../Emitter/emitter';
import {useDrawerStatus} from '@react-navigation/drawer';
import * as Progress from 'react-native-progress';
import {ArrowIcon, DeleteIcon, Logout, RateusIcon, SettingIcon} from '../../assets/svgImg/SvgImg';

const CustomDrawer = ({props, navigation}: any) => {
  const {
    logoutPress,
    userDetails,
    userToken,
    drawerPage,
    setAuthProfile,
    authprofile,
  }: any = useContext(AuthContext);
  const [progress, setProgress] = useState(0);
  const [userdata, setUserdata] = useState<any>();
  const [menuIndex, setMenuIndex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const isDrawerOpen = useDrawerStatus();

  return (
    <View style={styles.container}>
      <DrawerContentScrollView
        showsVerticalScrollIndicator={false}
        {...props}
        style={styles.drawer}>
        <View style={styles.mainContainer}>
          <View style={styles.firstContainer}>
            <View
              style={[
                styles.imageContainer,
                {
                  width: '100%',
                },
              ]}>
              <ImgView
                height={58}
                width={58}
                radius={50}
                dummy={true}
                url={
                  authprofile
                    ? {uri: authprofile}
                    : userdata?.profile_picture
                    ? {uri: userdata?.profile_picture}
                    : require('../../assets/img/profile.png')
                }
              />
              <View style={{marginHorizontal: 20, flex: 1}}>
                <AppText size={16} color={COLORS.white} family="PoppinsMedium">
                  Mukesh Yadav
                </AppText>
                <AppText size={13} color={COLORS.grey} family="PoppinsRegular">
                  Designer
                </AppText>
              </View>
            </View>
          </View>
          <View style={styles.progressContainer}>
            <AppText size={16} color={COLORS.mainBlack} family="PoppinsSemiB">
              Your Profile Progress
            </AppText>
            <AppText size={13} color={COLORS.mainBlack} family="PoppinsRegular">
              Complete your profile
            </AppText>
            <View style={styles.imageContainer}>
              <Progress.Bar
                progress={progress / 100}
                color={COLORS.blue}
                style={styles.progressbar}
              />
              <AppText
                size={16}
                color={COLORS.blue}
                family="PoppinsRegular"
                align="center"
                horizontal={10}>
                {Math.round(progress * 100) / 100}%
              </AppText>
            </View>
          </View>
          <TouchableOpacity
            style={styles.screensView}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <View style={styles.row}>
              <View style={styles.IconStyle}>
                <RateusIcon />
              </View>
              <AppText
                size={16}
                color={COLORS.white}
                family="PoppinsRegular"
                align="center"
                horizontal={17}>
                Rate Us
              </AppText>
            </View>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screensView}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <View style={styles.row}>
              <View style={styles.IconStyle}>
                <SettingIcon />
              </View>
              <AppText
                size={16}
                color={COLORS.white}
                family="PoppinsRegular"
                align="center"
                horizontal={17}>
                Setting
              </AppText>
            </View>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screensView}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <View style={styles.row}>
              <View style={styles.IconStyle}>
                <DeleteIcon />
              </View>
              <AppText
                size={16}
                color={COLORS.white}
                family="PoppinsRegular"
                align="center"
                horizontal={17}>
                Delete Account
              </AppText>
            </View>
            <ArrowIcon />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.screensView}
            onPress={() => {
              navigation.closeDrawer();
            }}>
            <View style={styles.row}>
              <View style={styles.IconStyle}>
                <Logout />
              </View>
              <AppText
                size={16}
                color={COLORS.white}
                family="PoppinsRegular"
                align="center"
                horizontal={17}>
                Log Out
              </AppText>
            </View>
            <ArrowIcon />
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </View>
  );
};
export default CustomDrawer;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkblue00,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  drawer: {
    marginTop: -5,
    backgroundColor: COLORS.darkblue00,
    flex: 1,
  },
  IconStyle: {
    width: 36,
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    width: '100%',
  },

  firstContainer: {
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '95%',
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
  },

  screensContainer: {
    marginTop: 5,
  },
  screensView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8%',
    borderBottomWidth:1.5,
    paddingBottom:10,
    paddingTop:5,
    borderBottomColor:COLORS.grey232,
    justifyContent: 'space-between',
  },

  drawerimage: {
    height: 120,
    width: '95%',
    borderRadius: 10,
    marginVertical: ms(1),
    alignSelf: 'center',
  },
  progressContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: ms(1),
    paddingVertical: ms(0),
    marginVertical: ms(1),
  },
  progressbar: {
    backgroundColor: COLORS.blue,
    borderRadius: 50,

    height: 8,
    width: width / 2,
  },
});
