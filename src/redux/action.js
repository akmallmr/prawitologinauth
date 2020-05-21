export const setForm = (inputType, value) => {
  return {type: 'SET_FORM', inputType: inputType, inputValue: value};
};

export const setLogin = (inputType, value) => {
  return {type: 'SET_LOGIN', inputType: inputType, inputValue: value};
};
