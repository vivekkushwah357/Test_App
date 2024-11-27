import { StyleSheet } from "react-native";
import { COLORS, ms } from "../../style";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {

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
    mainCOntain: {
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: 18,
        
    },
    textInput: {
        paddingLeft: 10,
        fontSize: 16,
        color: 'black',
        borderBottomColor: '#88A0B4',
        borderBottomWidth: 1,
        borderRadius: 20,
        marginTop: ms(1),
        width: '100%',
      },
      jobTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: ms(1),
        backgroundColor: COLORS.LightGreyF0F,
        borderRadius: 20,
        padding: '2%',
        height: 32,
      },
      selectButton: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        height: 45,
        borderWidth: 2,
        borderColor: '#2DA88A',
        marginTop: ms(1),
      },
      stateContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        flexWrap: 'wrap',
        marginTop: ms(1),
      },
      stateBox: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.LightGreyF0F,
        borderRadius: 20,
        paddingHorizontal: '5%',
        gap: 10,
        height: 32,
      },
      applyButton: {
        paddingVertical: 10,
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
      },
})