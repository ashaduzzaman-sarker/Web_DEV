// Problem 1 Solution
const filterEvenNumbers = (ar: number[]): number[] => {
  return ar.filter((num) => num % 2 === 0);
};

// Problem 2 Solution
const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};

// Problem 3 Solution
type StringOrNumber = string | number;

const checkType = (value: StringOrNumber): string => {
  if (typeof value === 'string') {
    return 'String';
  } else {
    return 'Number';
  }
};