export const convertNumberWithComma = number => {
  return new Intl.NumberFormat('en-US').format(number);
};
