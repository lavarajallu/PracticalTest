import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Platform,
  ImageBackground,
  TouchableOpacity,
  TouchableHighlight,
  AsyncStorage
} from "react-native";
import { Container, Content, Text} from 'native-base';
import { Actions } from 'react-native-router-flux';
var t = require('tcomb-form-native');
import { connect } from 'react-redux';
import { SignUpWizard_Function } from '../actions/index';
import CommonHeader from './Header/CommonHeader';
var Form = t.form.Form;

// here we are: define your domain model
var Person = t.struct({
  firstname: t.maybe(t.String),  // an optional string     
  lastname: t.maybe(t.String),  // an optional string
  address: t.String,           // a required number
  city: t.enums({'VSKP': 'Visakhapatnam',
  'Surat': 'Surath'},'Country'),             // a required number
  state: t.enums({'Ap': 'AndhraPradesh',
  'Kan': 'Karnataka'},'Country') ,           // a required number
  country:t.enums({'IT': 'Italy',
  'US': 'United States'},'Country')          // a required number    
});

var options = {auto: 'placeholders'}; // optional rendering options (see documentation)
 class SignUpWizardPage extends Component {

    constructor(props){
        super(props);
        this.state = {
             value: {
              firstname: '',
              lastname: '',
              address:'',
              city:'',
              state:'', 
              country:''
      }

        }
        this.onPress = this.onPress.bind(this)
    }


    onPress () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      //alert("Fields Obj: "+JSON.stringify(value)); // value here is an instance of Person
       this.props.registerMe(value)
       Actions.ImageUploadPage({person_Obj:JSON.stringify(value)})
       
    }else{
      alert("Fields Objelse: "+JSON.stringify(value));
    }
  }

  componentWillMount(){
    if(this.state.value == null || this.state.value == undefined){

    }else{
          AsyncStorage.getItem('userDetails_Obj',(err,dataSource)=>{
              var data= dataSource
              if(data) {
               // alert("data2: "+ data)
                  
                }
        }).done()

           AsyncStorage.getItem('validation_Obj',(err,dataSource)=>{
              var data= JSON.parse(dataSource)
              if(data) {
              //  alert("data2: "+ data)
                  
                }
        }).done()
           AsyncStorage.getItem('upload_imgUrl',(err,dataSource)=>{
              var data= dataSource
              if(data) {

                 // alert("data3: "+ data)
                }
        }).done()





    }
  }

  onChange(value) {
      this.setState({value});
  }
    render() {
        return (
            <Container>
             <CommonHeader title="Sign Up Wizard" />
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
    registerMe: (payload) => {
      //alert("po:", payload)
          dispatch(SignUpWizard_Function(payload));
    }
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUpWizardPage);
//export default SignUpWizardPage;