import {StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('screen');

const styles = StyleSheet.create({
    pageContainer:{
        flex:1,
        width:width,
        height:height,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    backgroundImage:{
        width:width,
        height:height
    },
    loginContainer:{
        flex:0.75,
        flexDirection:'column',
        justifyContent: 'flex-start', 
        alignItems:'center', 
        width:0.8*width,
        backgroundColor:'transparent',
        elevation: 1
    },
    logoImage : {
        width:0.48*width,
        resizeMode:'contain',
        height:0.15*height,
        marginTop:30,
        marginBottom:30,
    },
    inputContainer:{
        width:0.68*width,
        height:0.12*height,
        flexDirection:'column',
        justifyContent:'flex-start',
        alignSelf:'flex-start',
        margin:20,
        marginTop:70
    },
    inputContainerTextInput:{
        fontSize:16,
        width:0.68*width,
        height:40,
        borderBottomWidth:1,
        borderBottomColor:'white',
        marginTop:20
    },
    forgottenPasswordContainer:{
        width:0.78*width,
        height:0.05*height,
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:10
    },
    loginButtonContainer:{
        flexDirection:'row',
        width:0.8*width,
        justifyContent:'center',
        backgroundColor:'white',
        borderRadius:20,
        marginTop:40
    }
})

export default styles;