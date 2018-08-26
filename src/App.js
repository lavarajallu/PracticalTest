// RNRF logic here
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import SignUpWizardPage from './components/SignUpWizardPage.js';
import ImageUploadPage from './components/ImageUploadPage.js';
import ValidationPage from './components/ValidationPage.js';
import ScreenReviewPage from './components/ScreenReviewPage.js';

export default class App extends Component{
  render(){
    return(
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="SignUpWizardPage" component={SignUpWizardPage} initial={true} hideNavBar= "true"/>
          <Scene key="ImageUploadPage" component={ImageUploadPage}  hideNavBar= "true"/>
          <Scene key="ValidationPage" component={ValidationPage}  hideNavBar= "true"/>
          <Scene key="ScreenReviewPage" component={ScreenReviewPage} hideNavBar= "true"/>
        </Scene>
      </Router>
    );
  }
}