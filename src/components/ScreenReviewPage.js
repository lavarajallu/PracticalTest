import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage,
  ToastAndroid
} from "react-native";
import { Container, Content, Text,Card, CardItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import CommonHeader from './Header/CommonHeader';

 class ScreenReviewPage extends Component {

 	constructor(props){
        super(props);
        this.state = {
        	validation_Obj:this.props.validation_Obj,
          userDetails_Obj:this.props.userDetails_Obj,
          upload_imgUrl:this.props.upload_imgUrl
        }
        this.onPress = this.onPress.bind(this)
      
    };





    onPress () {
      // call getValue() to get the values of the form
      let {userDetails_Obj, validation_Obj, upload_imgUrl} = this.state;
      let a = {userDetails_Obj}
      let b = {validation_Obj}
      let c = {upload_imgUrl} 
       a = Object.assign(a, b)
       c = Object.assign(a, c)
   		//alert("hello123: " +JSON.stringify(c))
      AsyncStorage.setItem("userDetails_Obj", userDetails_Obj)
      AsyncStorage.setItem("validation_Obj", validation_Obj)
      AsyncStorage.setItem("upload_imgUrl", upload_imgUrl)
      ToastAndroid.show('Sign Up Success !', ToastAndroid.BOTTOM);
      Actions.SignUpWizardPage()
     }


     render() {
        return (
            <Container>
             <CommonHeader title="Screen Review" />
             <Content style={{flex:0}}>
                 <View style={styles.container}>

                   <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                     <Text style={styles.buttonText}>Submit</Text>
                   </TouchableHighlight>

                 </View>
             </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center" , padding:15},
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 5,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }

});

export default ScreenReviewPage;