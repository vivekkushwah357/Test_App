import { StyleSheet } from "react-native";
import { COLORS } from "../../style";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    applyButton: {
      paddingVertical: 8,
      width: '40%',
      borderRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
    },
    socialContainer: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      marginTop: 6,
    },
    topMyJOb:{
        backgroundColor: COLORS.blue2845,
        flexDirection:"row",
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 35,
        paddingTop: 10
    },
    header:{
       
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
      textContain:{
        justifyContent: 'center',
        alignItems:"center"
      },
      mainCOntain:{
        flex: 1,
        paddingTop:20,
        paddingHorizontal:2,
        backgroundColor: COLORS.LightGreyF0F
      }
})