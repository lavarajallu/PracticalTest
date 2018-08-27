import {
	Image_Upload_Method,
    SignUpWizard_Method, 
    Validation_Method,
    Screen_review_Method,
    errorMessage
} from '../actions/actionTypes';


const INITIAL_STATE = {
  signupvalues: null,
  validationvalues:null,
  imageuploadvalue:null,
  success: null,
  loading: false,
  error:null,
  reset_loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SignUpWizard_Method:
      return { ...state, signupvalues: action.payload };
    case Validation_Method:
      return { ...state, validationvalues: action.payload };
    case Image_Upload_Method:
      return { ...state, imageuploadvalue: action.payload };
    case errorMessage:
      return { ...state, error: action.payload };
    case Screen_review_Method: {
      if (action.payload) {
        return {
          ...state,
          loading: action.payload,
          error: null,
          success: null
        };
      }
      return { ...state, loading: action.payload };
    }
    default:
      return state;
  }
};