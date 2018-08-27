import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  AsyncStorage,
  TouchableHighlight
} from "react-native";
import { Container, Content, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
var t = require('tcomb-form-native');
import { connect } from 'react-redux';
import { Validation_Function } from '../actions/index';
import CommonHeader from './Header/CommonHeader';
var Form = t.form.Form;
// here we are: define your domain model



var Email = t.refinement(t.String, function (s) {
  return /@/.test(s);
});

Email.getValidationErrorMessage = function () {
  return 'Invalid email';
};

t.String.getValidationErrorMessage = function () {
  return 'Required field';
};

var Password = t.refinement(t.String, function (s) {
  return s.length >= 4;
});

Password.getValidationErrorMessage = function () {
  return 'Invalid password, enter at least 4 chars';
};

function samePasswords(x) {
  return x.newPassword === x.confirmPassword;
}

var Person = t.subtype(t.struct({
  email: Email,
  newPassword: Password,
  confirmPassword: Password
}), samePasswords);

Person.getValidationErrorMessage = function (value) {
  if (!samePasswords(value)) {
    return 'Password must match';
  }
};

var options = {auto: 'placeholders', fields: {
    newPassword: {
      type: 'password',
       secureTextEntry: true
    },
    confirmPassword: {
      type: 'password',
       secureTextEntry: true
    }
  }}; // optional rendering options (see documentation)
 class ValidationPage extends Component {

    constructor(props){
        super(props);
        this.state = {
             value: {
              email: '',
              password: '',
              confirmPassword:''
            },
            userDetails_Obj:this.props.user_Obj,
            upload_imgUrl:this.props.upload_imgUrl

        }
        this.onPress = this.onPress.bind(this);
    }





    onPress () {
    // call getValue() to get the values of the form
      let imageUploadfromPhone = AsyncStorage.getItem("uploadfromPhone")
      var value = this.refs.form.getValue();
      if (value) { // if validation fails, value will be null
     // alert("Fields Obj: "+JSON.stringify(value)); // value here is an instance of Person
      this.props.validation_method(value)
      Actions.ScreenReviewPage({validation_Obj:value, userDetails_Obj:this.state.userDetails_Obj, upload_imgUrl:imageUploadfromPhone})
    }

    

  }

  onChange(value) {
      this.setState({value});
  }

    render() {
        return (
            <Container>
             <CommonHeader title="Validation Page" />
             <Content style={{flex:0}}>
                 <View style={styles.container}>
                   <Form
                    ref="form"
                    type={Person}
                    value={this.state.value}
                    onChange={this.onChange.bind(this)}
                    options={options}/>
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
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

const mapStateToProps = (state) => {
  //alert("dddd: ", state)
  const { signupData } = state.signupwizard_reducer;
    return { signupData };
}

const mapDispatchToProps = (dispatch) => {
  return {
    validation_method: (payload) => {
     // alert("po:", payload)
          dispatch(Validation_Function(payload));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(ValidationPage);

//export default ValidationPage;