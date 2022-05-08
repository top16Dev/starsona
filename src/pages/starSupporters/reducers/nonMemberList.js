import { NON_MEMBER_LIST } from '../actions/getNonMembers';

const initalState = {
  data: [],
  loading: false,
  offset: -1,
  count: 0,
  limit: 15,
};

export default (state = { ...initalState }, action) => {
  switch (action.type) {
    case NON_MEMBER_LIST.start:
      return {
        ...state,
        loading: true,
        data: action.refresh ? [] : state.data,
      };

    case NON_MEMBER_LIST.end:
      return {
        ...state,
        loading: false,
      };

    case NON_MEMBER_LIST.success:
      return {
        ...state,
        loading: false,
        offset: action.offset,
        data: action.list,
        count: action.count,
      };

    case NON_MEMBER_LIST.failed:
      return {
        ...state,
        error: action.error,
      };

    case NON_MEMBER_LIST.reset:
      return initalState;

    default:
      return state;
  }
};
