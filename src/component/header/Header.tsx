import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import {COLORS, ms} from '../../style';
import AppText from '../AppText/AppText';
import {strings} from '../../utils/strings';
import {BackImg} from '../../assets/svgImg/SvgImg';

type HeaderProps = {
  navigation: any;
  rightHeaderButton?: () => void;
  centerView: boolean;
  title?: string;
  rightView: boolean;
  leftView?: boolean;
  customCenter?: boolean;
  bgColor?: any;
  leftHeaderButton?: () => void;
  centerHeader?: () => void;
  leftCustomPress?: any;
  backPress?: any;
  leftViewShow?: Boolean;
  lefttitle?: string;
};

const Header = ({
  navigation,
  rightHeaderButton,
  centerView,
  title,
  rightView,
  leftView,
  leftHeaderButton,
  lefttitle,
  centerHeader,
  customCenter,
  bgColor,
  leftCustomPress,
  backPress,
  leftViewShow,
}: HeaderProps) => {
  return (
    <View
      style={[
        styles.container,
        !bgColor && {backgroundColor: COLORS.white},
      ]}>
      {leftViewShow ? (
        <View></View>
      ) : (
        <>
          {leftView ? (
            <>{leftHeaderButton()}</>
          ) : (
            <View style={{flexDirection: 'row',alignItems:'center'}}>
              <TouchableOpacity
                style={styles.backImgBG}
                onPress={() => {
                  backPress ? leftCustomPress() : navigation.goBack();
                }}>
                <BackImg />
              </TouchableOpacity>
                <AppText
                  size={16}
                  family="PoppinsSemiB"
                  color={COLORS.mainBlack}>
                  {lefttitle}
                </AppText>
            </View>
          )}
        </>
      )}

      {centerView && (
        <AppText size={16} family="PoppinsSemiB" color={COLORS.mainBlack}>
          {title}
        </AppText>
      )}
      {customCenter && <>{centerHeader()}</>}
      <View style={{}}>
        {rightView && rightHeaderButton && <>{rightHeaderButton()}</>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: ms(1),
    justifyContent: 'space-between',
    // paddingVertical: 25,
    borderBottomWidth: 1,
    borderBottomColor: '#F2ECF6',
  },
  backImgBG: {
    height: 38,
    width: 38,
    borderRadius: 50,
    backgroundColor: COLORS.greyF3,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 25,
  },
});

export default Header;
