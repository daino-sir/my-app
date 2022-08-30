import { theme } from "./colors";
import { StatusBar ,StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    ctaButton: {
        alignItems: 'center',
        width: '75%',
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderRadius: 10,
        backgroundColor: theme.colors.primary
    },
    ctaContainer: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 60
    },
    statusbar: {
        height: StatusBar.currentHeight,
        width: '100%',
        backgroundColor: theme.colors.primary,
        color: theme.colors.primary
    },
    card:{
        marginTop: 10,
        backgroundColor:theme.colors.background,
        padding:20
    },
    bottomSlideContainer:{
        flexDirection: 'column-reverse',
        position:'absolute',
        alignItems: 'center',
        width: '100%',
        height: '100%',
  },
  bottomSlideCard:{
        width: '100%',
        height: 75,
        backgroundColor:theme.colors.background,
  },
  font700:{
    fontWeight:'700',
    color: theme.colors.primary,
    marginVertical: 10
},
fontNormal:{
      fontWeight:'400',
      color: theme.colors.grey,
      marginVertical: 10
  }
})