import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('screen');

const styles = StyleSheet.create({

    container : {
        flex : 1,
        width:width,
        height:height,
        backgroundColor : "#ffffff"
    },
    pageContainer:{
        flex:0.9,
        backgroundColor : '#4a90e2',
        width: width,
        height:height
    },
    backgroundImage:{
        width:width,
        height:height,
    },
    pageContainer2 : {
        flex:0.2,
        backgroundColor : '#ffffff',
        margin : 10,
    },
    formContainer : {
        flex: 1,
        flexDirection: "column"
      },

    formContainerLogin : {
        flex: 1,
        flexDirection: "column",
        justifyContent:'center',
        marginTop  :50   
      },
    loginInput: {
        marginLeft: 35,
        marginRight: 35,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor : "rgb(229, 229, 229)",
        backgroundColor:'transparent',
        paddingLeft:10
    },
    textInput: {
        color : 'gray',
        fontSize : 25,
    },
    button : {
        backgroundColor: 'green',
        margin:35,
        borderColor : "green",
        borderWidth : 1,
        borderRadius : 50,
        marginTop : 55
    },
    btnText: {
        fontSize: 18,
        textAlign: 'center',
        margin: 15,
        color: 'red',
    },
    locationImageContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'center',        
        justifyContent: 'center'
    },
    locationTextContainer:{
        fontSize : 20, 
        color : "#FFF", 
        padding : 15,
        fontFamily : "OpenSans"
    },
    wrapper: {
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    cityscpaceImageContainer:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'stretch'
    }
})

export default styles;