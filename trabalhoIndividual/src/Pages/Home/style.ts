import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: 'center',
    paddingBottom: 20,
    gap: 20,
  },

  title: {
    fontSize: 35,
    color: "black",
    marginTop:10,
    textAlign: "center",
  },

  boxArray: {
    backgroundColor: "grey",
    gap: 20,
    padding: 10,
    borderRadius: 10,
    height:230,
    width: 175,
    marginRight:5,
    marginLeft:5,
    alignItems:  'center',
  },

  nameArray: {
    fontSize: 22,
    color: "white",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  subTitleArray: {
    fontSize: 15,
    color: "white",
    width: '80%'
  },

  boxArrayVertical: {
    backgroundColor: "grey",
    gap: 20,
    padding: 10,
    borderRadius: 10,
    height:230,
    width: '90%',
    marginRight:5,
    marginLeft:20,
    alignItems:  'center',
    marginTop:10
  },

  foto:{
    width:160,
    height:160,
  },

  foto2:{
    width:340,
    height:210,
  }
});