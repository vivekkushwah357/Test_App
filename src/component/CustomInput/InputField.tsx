import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Platform,
} from 'react-native';
import React, {useState} from 'react';
import {strings} from '../../utils/strings';
import {COLORS, ms} from '../../style';
import {fonts} from '../../utils/misc';
import {shadowStyle} from '../../style/typography';
import {CheckIcon, CloseEyeImage, OpenEye} from '../../assets/svgImg/SvgImg';
import AppText from '../AppText/AppText';

type InputFieldProps = {
  value: any;
  setValue: any;
  secure: boolean;
  placeHolder: string;
  border?: number;
  formikValue?: any;
  fortmikError?: any;
  keyboard?: 'numeric' | 'email-address';
  refs?: any;
  onSubmit?: () => void;
  returnKeyType?: any;
  edit?: boolean;
  editFont?: boolean;
  widths?: any;
  name?: any;
  editable?:any
  titleIcon?: any;
  maxLength?: any;
};

const InputField = ({
  value,
  setValue,
  secure,
  widths,
  placeHolder,
  border,
  editable,
  formikValue,
  name,
  fortmikError,
  keyboard,
  refs,
  onSubmit,
  returnKeyType,
  titleIcon,
  edit,
  editFont,
  maxLength
}: InputFieldProps) => {
  const [focus, setFocus] = useState(false);
  const [eye, setEye] = useState(secure);
  return (
    <View>
      <AppText size={14} color={COLORS.navy} family="PoppinsRegular">
        {name}
      </AppText>
      <View
        style={[
          styles.textView,
          {width: widths ? widths : '100%'},
          focus && formikValue && fortmikError && styles.errorTextInput,
          {
            backgroundColor: '#F0F2F3',
          },

          {height: 42},
        ]}>
        {titleIcon && (
          <>
            {titleIcon && (
              <View style={{ height:'100%', justifyContent: 'center', marginTop: Platform.OS == 'ios' ? 7:0}}>
                <Text>{titleIcon}</Text>
              </View>
            )}
          </>
        )}
        <TextInput
          ref={refs}
          value={value}
          placeholder={placeHolder}
          autoCapitalize="none"
          onChangeText={text => setValue(text)}
          placeholderTextColor={'rgba(50, 50, 50, 0.4)'}
          secureTextEntry={eye}
          onSubmitEditing={onSubmit}
          editable={editable}
          maxLength={maxLength}
          keyboardType={keyboard ? keyboard : ''}
          style={[styles.textInput, {fontSize: editFont ? 13 :13,paddingHorizontal: titleIcon ? 10: 0,}]}
          returnKeyType={returnKeyType}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {edit ? (
          <TouchableOpacity>
            <CheckIcon />
          </TouchableOpacity>
        ) : (
          <>
            {secure && (
              <TouchableOpacity onPress={() => setEye(!eye)}>
                {eye ? (
                  <CloseEyeImage width={24} height={24} />
                ) : (
                  <OpenEye width={24} height={24} />
                )}
              </TouchableOpacity>
            )}
          </>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textView: {
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#88A0B4',
  },
  textInput: {
    flex: 1,
    color: COLORS.navy,
    fontFamily: fonts.PoppinsMedium,
    height: 56,
    // marginVertical: 7,
    // marginRight: 8,
    

  },
  // activeTextInput: {
  //   borderBottomWidth: 1,
  //   borderBottomColor: '#88A0B4',
  // },
  errorTextInput: {
    borderBottomWidth: 1,
    borderBottomColor: COLORS.fadeRrrorRed,
  },
});

export default InputField;
