const selectIsLoggedIn = state => state.auth.isLoggedIn;
const selectUsername = state => state.auth.user.name;

export const selectAuthSelectors = {
  selectIsLoggedIn,
  selectUsername,
};
