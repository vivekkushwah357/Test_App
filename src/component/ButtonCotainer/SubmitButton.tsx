import { View, ActivityIndicator, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import LinearGradient from 'react-native-linear-gradient'; // Import LinearGradient
import { COLORS } from '../../style';
import AppText from '../AppText/AppText';

const AnimatedBtn = Animated.createAnimatedComponent(TouchableOpacity)

type SubmitButtonProps = {
  title: string;
  pressing: () => void;
  widthOf?: any;
  loader?: any;
  colorChange?: any;
  colortext?: any;
  width?: any;
  height?: any;
  size?: any;
  disabled?: any;
};

const SubmitButton = ({
  title,
  pressing,
  widthOf,
  size,
  loader,
  colortext,
  height,
  disabled,
}: SubmitButtonProps) => {
  const [loading, setLoading] = useState(false);
  const animatedWidth = useSharedValue(widthOf);
  const animatedRadius = useSharedValue(100);

  useEffect(() => {
    if (loader) {
      animatedWidth.value = withTiming(50, { duration: 500 });
      animatedRadius.value = withTiming(100, { duration: 500 });
      setLoading(true);
    } else {
      setLoading(false);
      animatedWidth.value = withTiming(widthOf, { duration: 500 });
      animatedRadius.value = withTiming(100, { duration: 500 });
    }
  }, [loader]);

  const animatedStyle = useAnimatedStyle(() => ({
    width: animatedWidth.value,
    borderRadius: animatedRadius.value,
  }));

  return (
    <AnimatedBtn style={[animatedStyle, { height: height || 45 }]} onPress={() => {
      pressing()
    }} disabled={disabled}>
      <LinearGradient
        colors={['#89D388', '#6AC5A7']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={[styles.buttonContainer, { width: widthOf, borderRadius: 100 }]}
      >
        {loading ? (
          <ActivityIndicator size={32} color={COLORS.white} />
        ) : (
          <AppText
            size={size || 16}
            color={colortext || COLORS.white}
            family="PoppinsSemiB"
          >
            {title}
          </AppText>
        )}
      </LinearGradient>
    </AnimatedBtn>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
  },
});

export default SubmitButton;
