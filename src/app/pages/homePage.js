import Gallery from 'react-native-image-gallery';
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import { connect } from 'react-redux';
import {responsive} from "react-native-responsive-ui";
import InCallManager from 'react-native-incall-manager';

import { View,Image,Text,StatusBar,TextInput,TouchableHighlight,KeyboardAvoidingView, ScrollView,
        TouchableWithoutFeedback,
        Dimensions,
        Modal,
        StyleSheet

} from 'react-native';
import tts  from 'react-native-android-speech';
import Voice from 'react-native-voice';
 

export default class Home extends Component{
  constructor() {
    super()
    this.state = {
        results: []
    }
    // Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    Voice.isRecognizing()
  }

  // constructor(props) {
  //  Voice.onSpeechStart = this.onSpeechStartHandler.bind(this);
  //   Voice.onSpeechEnd = this.onSpeechEndHandler.bind(this);
  //   Voice.onSpeechResults = this.onSpeechResultsHandler.bind(this);
  // }

  // tts.getLocales().then(locales=>{
  //   console.log(locales)
  // });


  onSpeechResults(e) {
    this.setState({
      results: e.value
    })

    var textData = this.state.results[0]
    console.log(textData)
      if(textData.includes('hi') || textData.includes('hello')){
              this.onSpeech(textData)      
      }
       if(textData.includes('shriram') || textData.includes('sriram')){
          this.onSpeech('hey Shiyam')
       }
       if(textData.includes('how are you') || textData.includes('howare you')){
          this.onSpeech('I am good how are you')
       }

        if(textData.includes('kubra') || textData.includes('howare you')){
          this.onSpeech('ohh I know kubra   I mean kubernetes')
       }

       if(textData.includes('weather') || textData.includes('outside')){
          var self = this; 
          self.wetherAPICall(textData,function(results){
              console.log(results);
              var country = results.country
              var town = results.town
              var state = results.state
              let url = `http://api.openweathermap.org/data/2.5/weather?lat=`+results.lat+`&lon=`+results.lng+`&appid=e9775c375f178b7753aa7ab6635f4d51`;
    
              fetch(url).then((response) =>{
                var weatherDesc = JSON.parse(response._bodyInit).weather[0].description
                var spText = "It is " + weatherDesc + " in "+town+state+country
                self.onSpeech(spText) 
                  
              })
          })
       }

      // if(textData.includes('go') || textData.includes('can I go')){
      //   // var results = this.wetherAPICall();
      //   // if(results.includes('rain')){
      //   //   this.onSpeech("Don't go out side" + results);
      //   // }
      //   // if(results.includes('cloud')){
      //   //   this.onSpeech("Yes, you can go out side" + results);
      //   // }
      //   this.wetherAPICall();
      // }

    // this.state.results.map((text, index) => {
    //   if(text.includes('sweetheart')){
    //     Speech('Hey Rohit')
    //   }
    // })
  }

  async wetherAPICall(textData, cb){
    let getLatLong = "https://api.opencagedata.com/geocode/v1/json?q="+textData+"&key=c039174e6e7e4d948884cf6b8ac19a9e"
      fetch(getLatLong).then((res) => {
          var latLongRes = {
            'lat':JSON.parse(res._bodyText).results[0].geometry.lat,
            'lng':JSON.parse(res._bodyText).results[0].geometry.lng,
            'state':JSON.parse(res._bodyText).results[0].components.state,
            'country':JSON.parse(res._bodyText).results[0].components.country,
            'town':JSON.parse(res._bodyText).results[0].components.town
          }
           cb(latLongRes);
      })
  }

  // promise2(value){
  //   let url = `http://api.openweathermap.org/data/2.5/weather?lat=12.9716&lon=77.5946&appid=e9775c375f178b7753aa7ab6635f4d51`;
    
  //     fetch(url).then((response) =>{
  //       var weatherDesc = JSON.parse(response._bodyInit).weather[0].description
  //       var spText = "It is " + weatherDesc

  //       if(spText.includes('rain')){
  //         var newText = "Don't got outside"+ spText
  //         this.onSpeech(newText)  
  //       }else{
  //         var newText = "You can go outside"+ spText
  //         this.onSpeech(newText)  
  //       }  
  //     })
    
  // }

  componentDidMount(){
    if (InCallManager.recordPermission !== 'granted') {
      InCallManager.requestRecordPermission()
      .then((requestedRecordPermissionResult) => {
          console.log("InCallManager.requestRecordPermission() requestedRecordPermissionResult: ", requestedRecordPermissionResult);
      })
      .catch((err) => {
          console.log("InCallManager.requestRecordPermission() catch: ", err);
      });
    }
  }

  onSpeech(speakText){
    tts.speak({
        text: speakText, // Mandatory
        pitch:1.5, // Optional Parameter to set the pitch of Speech,
        forceStop : false , //  Optional Parameter if true , it will stop TTS if it is already in process
        language : 'en', // Optional Paramenter Default is en you can provide any supported lang by TTS
        country : 'US' // Optional Paramenter Default is null, it provoques that system selects its default
    }).then(isSpeaking=>{
        //Success Callback
        console.log(isSpeaking);
    }).catch(error=>{
        //Errror Callback
        console.log(error)
    });
  }



  onSpeechStart(e){
    InCallManager.stop();
    Voice.isAvailable()
    Voice.start('en-US').then((res) => {
    }, setTimeout(function() {console.log('done')}, 10000))
    

    // tts.speak({
    //     text:'Lets Go', // Mandatory
    //     pitch:1.5, // Optional Parameter to set the pitch of Speech,
    //     forceStop : false , //  Optional Parameter if true , it will stop TTS if it is already in process
    //     language : 'en', // Optional Paramenter Default is en you can provide any supported lang by TTS
    //     country : 'US' // Optional Paramenter Default is null, it provoques that system selects its default
    // }).then(isSpeaking=>{

    // }).catch(error=>{
    //     //Errror Callback
    //     console.log(error)
    // });
    //     const {navigate} = this.props.navigation;
    //     navigate("home")
  }


  onSpeechStop(e){
    Voice.stop();
  }

  render() {
    return (
            <View  style={styles.container}>
                    <StatusBar
                        backgroundColor="#4a90e2"
                        barStyle="light-content"
                    />      
                    <View style={styles.pageContainer2}>
                        <TouchableHighlight onPress={this.onSpeechStart.bind()}>
                              <Image source={require('../components/common/images/ic_settings_voice_black_24dp.png')} />                          
                        </TouchableHighlight>
                    </View>
                    <View style={styles.pageContainer2}>
                        <Text onPress={this.onSpeechStop.bind()}>
                            
                         </Text>
                    </View>
            </View> 
    );
  }
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
        backgroundColor : "#ffffff"
    },
    pageContainer2 : {
        flex:0.2,
        backgroundColor : '#ffffff',
        margin : 0,
        paddingTop:150,
        justifyContent: 'center',
        alignItems: 'center'
    },
})