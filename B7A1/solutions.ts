// problem 1 Solution
const filterEvenNumbers = (ar: number[]): number[] => {
  return ar.filter((num) => num % 2 === 0);
};

// problem 2 Solution
const reverseString = (str: string): string => {
  return str.split('').reverse().join('');
};