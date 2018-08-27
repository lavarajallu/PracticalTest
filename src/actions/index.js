import {
	Image_Upload_Method,
    SignUpWizard_Method, 
    Validation_Method,
    Screen_review_Method,
    Page_Error_Method
} from './actionTypes'


// export function signupPayload(payload) {   this is used for sync without using API
//     console.log("payload SYNC:", payload)
//     return ({ type: SIGN_UP, payload }); 
// }

export function SignUpWizard_Function (payload) {
  return({
      type: SignUpWizard_Method,
      payload
    });
}

export function Image_Upload_Function (payload) {
  return({
      type: Image_Upload_Method,
      payload
    });
}

export function Validation_Function (payload) {
  return({
      type: Validation_Method,
      payload
    });
}

export function Screen_review_Function (payload) {
  return({
      type: Screen_review_Method,
      payload
    });
}

export const errorMessage = error => {
  return { type: Page_Error_Method, payload: error };
};