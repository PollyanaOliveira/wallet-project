export const USER_LOGIN = 'USER_LOGIN';

export const userLogin = (email, password) => ({
  type: 'USER_LOGIN',
  payload: {
    email,
    password,
  },
});
