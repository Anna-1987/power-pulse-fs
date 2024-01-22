export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectUser = (state) => state.auth.user;

export const selectAvatarURL = (state) => state.auth.user.avatarURL;

export const selectToken = (state) => state.auth.token;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuthError = (state) => state.auth.error;

export const selectIsResendShown = (state) => state.auth.isResendShown;
