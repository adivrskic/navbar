export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_NAV":
      return {
        ...state,
        navOpen: !state.navOpen,
      };

    default:
      return state;
  }
};

export const initialState = {
  navOpen: false,
  navLocation: "left",
};
