import { initialState } from './state';

export const GetDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_DATA':
      return state;

    default:
      return state;
  }
};
