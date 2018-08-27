import {combineReducers} from 'redux';
import SignUpWizardReducer from './SignUpWizardReducer.js';
//import ValidationReducer from './ValidationReducer.js';
//import ImageUploadReducer from './ImageUploadReducer.js';
const allReducers= combineReducers({
  signupwizard_reducer: SignUpWizardReducer
  //validationfields: ValidationReducer,
  //imageuploadvalue: ImageUploadReducer
});
export default allReducers;