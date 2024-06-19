import { StyleSheet } from "react-native";


export const style = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#999',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 20,
  },

  title: {    
    fontFamily: 'RubikMonoOne_400Regular',
    fontSize: 35,
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 7,
  },

  logo: {
    position: 'absolute'
  },

  
});


