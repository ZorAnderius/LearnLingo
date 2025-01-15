export const envConfig = (name, defaultValue) => {
    const value = import.meta.env[`VITE_${name}`];
  if (value) {
    return value;
  } else if (defaultValue) {
    return defaultValue;
  } else {
    console.log(`Missing: import.meta.env['VITE_${name}']`);
  }
};
