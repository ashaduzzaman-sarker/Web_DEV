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

// Problem 4 Solution
const getProperty = <X>(obj: X, key: keyof X) => {
    return obj[key];
}

// Problem 5 Solution
interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book): object => {
  return { ...obj, isRead: true };
};

// Problem 6 Solution
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string) {
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string {
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}


// Problem 7 Solution
const getIntersection = (arr1: number[], arr2: number[]): number[] => {
    const set1: Set<number> = new Set(arr1);
    const set2: Set<number> = new Set(arr2);

    const newSet: Set<number> = new Set();

    for (const num of set1) {
        if (set2.has(num)) {
            newSet.add(num);
        }    
    }
    const ans:number[] = [...newSet]
    return ans;
}