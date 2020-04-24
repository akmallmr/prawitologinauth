import {combineReducers} from 'redux';

const initialState = {
  name: 'Akmal Maula Rasyid',
};

const initialStateRegister = {
  title: 'Register Page',
  desc: 'Ini adalah desc untuk Register',
};

const initialStateLogin = {
  info: 'Tolong masukan password anda',
  isLogin: true,
};

const RegisterReducer = (state = initialStateRegister, action) => {
  return state;
};

const LoginReducer = (state = initialStateLogin, action) => {
  return state;
};

const reducer = combineReducers({
  RegisterReducer,
  LoginReducer,
});

export default reducer;
