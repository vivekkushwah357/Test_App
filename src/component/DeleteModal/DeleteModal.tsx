import {View, Text, Modal, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './styles';
import AppText from '../AppText/AppText';
import {COLORS} from '../../style';
import LinearGradient from 'react-native-linear-gradient';

type DeleteModalProps = {
  modalShow: boolean;
  setModalShow: any;
  title: any;
  confirm?: any;
  status?: any;
  button1: any;
  button2: any;
  onbutton2: any;
  onbutton1: any;
};
const DeleteModal = ({
  modalShow,
  status,
  setModalShow,
  title,
  confirm,
  button1,
  button2,
  onbutton1,
  onbutton2,
}: DeleteModalProps) => {
  return (
    <Modal visible={modalShow} transparent={true}>
      <View style={styles.modalContain}>
        <View style={styles.reportContain}>
          <View style={[styles.textContain, {marginVertical: 10}]}>
            <AppText
              size={18}
              color={COLORS.navy}
              family="PoppinsBold"
              align="center">
              {title}
            </AppText>
            <AppText
              size={14}
              top={10}
              color={COLORS.navy}
              family="PoppinsRegular"
              align="center">
              {confirm}
            </AppText>
          </View>
          <View style={[styles.buttonsContainer, {marginTop: 5,gap:status == 1 ? 0:20}]}>
            {status == 1 ? (
              <TouchableOpacity
                style={[styles.buttonView]}
                onPress={() => onbutton1()}>
                <LinearGradient
                  colors={['#89D388', '#6AC5A7']}
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  style={[styles.buttonView]}>
                  <AppText size={16} color={COLORS.white} family="PoppinsBold">
                    {button1}
                  </AppText>
                </LinearGradient>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.buttonView,{backgroundColor:'#FF3636'}]}
                onPress={() => onbutton1()}>
                <AppText size={16} color={COLORS.white} family="PoppinsBold">
                  {button1}
                </AppText>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[
                styles.buttonView,
                {
                  backgroundColor: COLORS.white,
                  borderWidth: 2,
                  borderColor: COLORS.greendark,
                },
              ]}
              onPress={() => onbutton2()}>
              <AppText size={16} color={COLORS.greendark} family="PoppinsBold">
                {button2}
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default DeleteModal;
