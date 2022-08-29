const authReducer = (
  state = { authData: null, user: JSON.parse(localStorage.getItem('profile')) },
  action
) => {
  switch (action.type) {
    case 'AUTH':
      localStorage.setItem(
        'profile',
        JSON.stringify({ ...action.payload })
      );
      return {
        ...state,
        authData: action.payload,
        user: JSON.parse(localStorage.getItem('profile'))
      };
    case 'LOGOUT':
      localStorage.clear();
      console.log('cleared');
      return { ...state, authData: action.payload, user: null};
    default:
      return state;
  }
};

export default authReducer;
