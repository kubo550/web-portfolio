export const random = <T>(val: T[] | number): T | number => {
  if (Array.isArray(val)) {
    const i = Math.floor(Math.random() * val.length);
    return val[i];
  } else {
    return Math.random() * val;
  }
};
