import React, { useRef } from "react";
import { useEffect, useState, useContext } from "react";
import { StyleSheet, Animated, Dimensions, View, Text, TouchableOpacity, } from "react-native";
import emitter from "./emitter";
import { COLORS, ms } from "../../style";
import { shadowStyle } from "../../style/typography";
import AppText from "../AppText/AppText";
import { CrossIcon } from "../../assets/svgImg/SvgImg";

const WIDTH = Dimensions.get("screen").width;

const AlertPage = () => {
  const [alert_name, setAlertName] = useState("");
  const [message, setMessage] = useState("");
  const slideup = useRef(new Animated.Value(0)).current;
  let autohidetime = 3100;
  let timeout_id: any = null;

  const emitListener = (t_alert_name: any) => {
    if (t_alert_name?.heading && t_alert_name?.message) {
      showAlert(t_alert_name?.heading);
      setMessage(t_alert_name?.message)

    } else {

      showAlert(t_alert_name);
    }
  };

  useEffect(() => {
    emitter.addListener("alert", emitListener);
    return () => {
      emitter.removeAllListeners();
    };
  }, []);

  const showAnim = () => {
    Animated.timing(slideup, {
      toValue: 80,
      duration: 300,
      useNativeDriver: false,
    }).start();
    timeout_id = setTimeout(function () {
      hideAnim();
      autohidetime = 2000; // reset if modified
    }, autohidetime);
  };
  const hideAnim = () => {
    Animated.timing(slideup, {
      toValue: -200,
      duration: 300,
      useNativeDriver: false,
    }).start(({ finished }) => {
      setAlertName("");
    });
    clearTimeout(timeout_id);
  };

  const showAlert = (tname: string) => {
    setAlertName(tname);
    showAnim();
  };


  if (alert_name == "login") {
    return (
      <Animated.View style={[styles.container, { bottom: slideup }, shadowStyle]}>
        <View style={[styles.anim_cont, { borderLeftColor: "#0db04b", borderLeftWidth: 4 }, shadowStyle]}>
          <View style={{ paddingVertical: 5 }}>
            <AppText size={15} family="PoppinsBold" color={COLORS.black}>Success</AppText>
            <View style={{ height: 5 }} />
            <AppText size={11} family="PoppinsMedium" color={COLORS.black}>{message}</AppText>
          </View>
          <TouchableOpacity
            onPress={hideAnim}
            hitSlop={{ left: 5, right: 5, bottom: 5, top: 5 }}
            style={{paddingTop: 12,}}
          >
            <CrossIcon width={20} height={20}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }
  if (alert_name == "failed") {
    return (
      <Animated.View style={[styles.container, { bottom: slideup }, shadowStyle]}>
        <View style={[styles.anim_cont, { borderLeftColor: COLORS.fadeRrrorRed, borderLeftWidth: 4 }, shadowStyle]}>
          <View style={{ paddingVertical: 5 }}>
            <AppText size={15} family="PoppinsBold" color={COLORS.black}>Failed</AppText>
            <View style={{ height: 5 }} />
            <AppText size={11} family="PoppinsMedium" color={COLORS.black}>{message}</AppText>
          </View>
          <TouchableOpacity
            onPress={hideAnim}
            hitSlop={{ left: 5, right: 5, bottom: 5, top: 5 }}
            style={{paddingTop: 12,}}
          >
            <CrossIcon width={20} height={20}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
    );
  }

  return <View></View>;
};
export default AlertPage;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    width: WIDTH,
    paddingHorizontal: ms(-1)
  },
  anim_cont: {
    marginHorizontal: ms(0),
    paddingHorizontal: ms(2),
    paddingVertical: 5,
    flexDirection: "row",
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
  },
  alertHeading: {

  },
});
