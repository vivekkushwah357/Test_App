import { View, Text, TextStyle, Image } from 'react-native'
import React from 'react'
import { shadowStyle } from '../../style/typography'
import { COLORS } from '../../style'

type WlsImageProps = {
  height: any,
  width: any,
  borderColor?: string,
  radius?: number,
  url: string,
  dummy?: boolean,
  borderWidth?: number,
  mode?: 'contain' | 'center' | 'cover' | 'stretch' | 'repeat',
  tintColor?: string
  mobileLocalImg?: string
  shadow?: boolean
}
const ImgView = ({ height, width, borderColor, tintColor, radius, url, dummy, borderWidth,shadow, mode, mobileLocalImg }: WlsImageProps) => {
  const style: any = {
    height: height,
    width: width,
    borderColor: borderColor,
    borderRadius: radius,
    borderWidth: borderWidth,
    tintColor: tintColor
  }
  return (
    <View style={[shadow && shadowStyle, shadow && {borderRadius: radius, backgroundColor: COLORS.white}]}>
      {
        mobileLocalImg ? (
          <Image source={dummy == true ? url : { uri: url }} style={[style]} resizeMode={mode} />
        ) : (
          <Image source={dummy == true ? url : { uri: url }} style={[style,]} resizeMode={mode} />
        )
      }

    </View>
  )
}

export default ImgView