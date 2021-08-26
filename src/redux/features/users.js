const initialState = {
  users: [],
};

export const users = (state = initialState, action) => {
  switch (action.type) {
    case "users/load":
      return {
        ...state,
        users: action.payload,
      };
    case "users/deleteUser":
      return {
        ...state,
        users: state.users.filter((item) => {
          if (item.id !== action.payload.id) {
            return true;
          }

          return false
        }),
      };
    default:
      return state;
  }
};

export const loadUsers = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((dataUsers) => {
        dispatch({ type: "users/load", payload: dataUsers });
      });
  };
};

export const removeUser = (id) => {
  return (dispatch) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => res.json())
      .then((userId) => {
        dispatch({ type: "users/deleteUser", payload: { id } });
      });
  };
};
