import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    HeadingText:{
        fontSize:22,
        fontWeight:"700"
    },
    Button:{
        padding:10,
        borderRadius:90,
        backgroundColor:"skyblue"
    },
    buttontext:{
        color:"black",
        fontSize:18,
        fontWeight:"700",
        marginLeft:10
    },
    buttoncontainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginVertical:10
    },
    nestedbutton:{
        flexDirection:"row",
        marginVertical:5
        
    },
    nestedbuttontext:{
        color:"black",
        fontSize:18,
        marginLeft:10
    
    }

  });

  export default styles