import { REQUESTS } from '../actions/handleRequests';

const initialState = {
  loading: false,
  error: {
    has: false,
    message: '',
  },
  hasDeclined: false,
};

export default (state = { ...initialState }, action) => {
  switch (action.type) {
    case REQUESTS.start:
      return {
        ...state,
        loading: true,
      };

    case REQUESTS.failed:
      return {
        ...state,
        loading: false,
        error: {
          has: true,
          message: action.error,
        },
      };

    case REQUESTS.end:
      return {
        ...state,
        loading: false,
      };
    case REQUESTS.hasDeclined:
      return {
        ...state,
        hasDeclined: action.value,
      };

    default:
      return state;
  }
};
