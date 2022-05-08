import { SET_SIGNUP } from '../actions/setSignupFlow';

const initialState = {
  role: '',
  currentStep: 0,
  acceptTerms: false,
  isSocial: false,
  source: '',
  firstName: '',
  lastName: '',
  nickName: '',
  email: '',
  profilePhoto: '',
  fbId: '',
  gpId: '',
  instId: '',
  twId: '',
  profileImage: null,
  categoryList: [],
  audioVideoSupport: true,
  welcomeVideoSkip: false,
  welcomeVideo: '',
  welcomeVideoFile: '',
  welcomeVideoLength: '',
  videoUploaded: false,
  price: '20',
  referral: '',
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case SET_SIGNUP.setSignupFlow:
      return {
        ...state,
        ...action.details,
      };

    case SET_SIGNUP.clearSignupFlow:
      return initialState;

    case SET_SIGNUP.completedSignupFlow:
    return {
      ...state,
      completedSignup: action.iscompleted,
    };

    case SET_SIGNUP.setDemoUserFlow:
    return {
      ...state,
      isDemoUser: action.isDemoUser,
    };

    default:
      return state;
  }
};
