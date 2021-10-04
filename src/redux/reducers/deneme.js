import {CHANGE_NAME} from '../actions';

let defaultState = {
  name: 'Nuri',
};

const deneme = (state = defaultState, action) => {
  switch (CHANGE_NAME) {
    case action.type:
      return {
        ...state,
        name: action.payload,
      };
      break;

    default:
      return {...state};
      break;
  }
};

export default deneme;
