import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight
} from "react-native";
import { Container, Content, Text,Card, CardItem} from 'native-base';
import { Actions } from 'react-native-router-flux';
import CommonHeader from './Header/CommonHeader';
const imgUrl = 'https://upload.wikimedia.org/wikipedia/commons/d/da/Internet2.jpg'
//import ImagePickerComponent from './ImagepickerComponent';
// in android version getting issue so i moved sample image in 
//if you wanna checkout this code please go to above componet for image upload

 class ImageUploadPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			person_Obj: {},
			upload_imgUrl :imgUrl
		};
		 this.onPress = this.onPress.bind(this)
		
	}

	componentWillMount(){
		this.setState({
			person_Obj:this.props.person_Obj
		})
		//alert("Imge:" + this.props.person_Obj)
	}


      onPress () {
      //	let person_Obj = JSON.stringify(this.props.person_Obj)
      	// call getValue() to get the values of the form
   		//alert("hello: " +this.state.person_Obj)
   		Actions.ValidationPage({user_Obj:this.state.person_Obj,upload_imgUrl:this.state.upload_imgUrl})
     }


     render() {
        return (
            <Container>
             <CommonHeader title="Image Upload Page" />
             <Content style={{flex:0}}>
                 <View style={styles.container}>
                 <Card>
                 <CardItem cardBody>
                    <Image source={{uri:this.state.upload_imgUrl }} style={{height: 200, width: null, flex: 1}}/>
                 </CardItem>
                 </Card>

                   <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                     <Text style={styles.buttonText}>Next</Text>
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

export default ImageUploadPage;
