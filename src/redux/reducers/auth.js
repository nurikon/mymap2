let defaultState = {
  islogged: false,
  data: null,
};

const auth = (state = defaultState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        islogged: true,
        data: action.payload,
      };
    case 'LOGOUT':
      return {
        islogged: false,
        data: null,
      };
    default:
      return state;
  }
};

export default auth;
