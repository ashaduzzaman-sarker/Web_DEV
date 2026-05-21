# How Generics Let us Build Reusable, Strictly-Typed Components in TypeScript

## Introduction

One of the most poweful features of TypeScript is **Generics**. They allow us to write functions, classes, and interfaces that work with any data type — without sacrificing type safety. We can think of generics as "type variables" that get filled in at the time of use, giving us reusable code that remains fully typed regardless of what we pass in.


## The Problem Without Generics

Imagine we want to write a function that returns the first element of an array. Without generics, we have two bad options:

**Option 1: Use `any` — loses all type information**
```typescript
function getFirst(arr: any[]): any {
  return arr[0];
}

const first = getFirst([1, 2, 3]);
first.toUpperCase(); // No error, but crashes at runtime!
```

**Option 2: Write separate functions for every type — repetitive and not scalable**
```typescript
function getFirstNumber(arr: number[]): number { return arr[0]; }
function getFirstString(arr: string[]): string { return arr[0]; }
```

Neither approach is ideal. Generics solve both problems at once.

---

## Introducing Generics

A generic uses a **type parameter** (conventionally `T`) that acts as a placeholder for the actual type.

```typescript
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirst([1, 2, 3]);       // TypeScript infers T as number
const str = getFirst(["a", "b", "c"]); // TypeScript infers T as string

num.toFixed(2);    // ✅ Safe — TypeScript knows it's a number
str.toUpperCase(); // ✅ Safe — TypeScript knows it's a string
```

TypeScript infers `T` from the argument we pass in, so we don't even need to specify it manually most of the time.

---

## Generic Functions with Constraints

we can restrict what types `T` can be using the `extends` keyword. This is called a **generic constraint**.

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

getProperty(user, "name"); // ✅ Returns "John Doe"
getProperty(user, "email"); // ❌ Compile error: "email" doesn't exist on user
```

Here, `K extends keyof T` ensures the key must actually exist on the object — preventing typos and invalid access at compile time, not runtime.

---

## Generic Interfaces

Generics are equally poweful in interfaces, making data structures flexible yet safe.

```typescript
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Alice", age: 25 },
  status: 200,
  message: "Success",
};

const numberResponse: ApiResponse<number[]> = {
  data: [1, 2, 3],
  status: 200,
  message: "Success",
};
```

One interface, infinite shapes — all fully typed.

---

## Generic Classes

Classes can also be made generic, which is especially useful for building data structures.

```typescript
class Stack<T> {
  private items: T[] = [];

  push(item: T): void {
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.items.length - 1];
  }
}

const numStack = new Stack<number>();
numStack.push(10);
numStack.push(20);
console.log(numStack.pop()); // 20 — TypeScript knows it's a number

const strStack = new Stack<string>();
strStack.push("hello");
```

---

## Multiple Type Parameters

we can use more than one type parameter when needed.

```typescript
function pair<A, B>(first: A, second: B): [A, B] {
  return [first, second];
}

const result = pair("age", 30); // Type: [string, number]
```

---

## Conclusion

Generics are the backbone of reusable, type-safe TypeScript code. They let us write logic once and use it across many different data types, while TypeScript ensures every usage remains correct. 