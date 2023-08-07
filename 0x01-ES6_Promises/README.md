# 0x01. ES6 Promises

## Overview
The project "0x01. ES6 Promises" explores the concept of Promises in JavaScript, specifically in ES6. Promises provide a way to handle asynchronous operations in a more structured and elegant manner. This project covers various aspects of Promises, such as creating, resolving, rejecting, handling multiple promises, and using `await` and `async` for asynchronous programming.

## Learning Objectives
By the end of this project, you will be able to explain:

- Promises, their purpose, and how they work.
- How to use methods like `then`, `resolve`, and `catch` to handle Promises.
- How to handle multiple promises using methods like `Promise.all` and `Promise.race`.
- Using `await` and `async` to write cleaner and more readable asynchronous code.

## Requirements
- All files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- All files should end with a new line.
- A README.md file, at the root of the project folder, is mandatory.
- Your code should use the .js extension.
- Your code will be tested using Jest and the command `npm run test`.
- Your code will be verified against lint using ESLint.
- All of your functions must be exported.

## Setup
To set up your development environment, follow these steps:

1. Install NodeJS 12.11.x (in your home directory):
```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

2. Verify NodeJS and npm versions:
```bash
nodejs -v
# Output: v12.11.1

npm -v
# Output: 6.11.3
```

3. Install Jest, Babel, and ESLint in your project directory:
```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint
```

## Tasks
### 0. Keep every promise you make and only make promises you can keep
In this task, you need to create a Promise function `getResponseFromAPI()`. This function should return a Promise.

### 1. Don't make a promise...if you know you can't keep it
In this task, you need to create a function `getFullResponseFromAPI(success)` that returns a Promise. The function should take a boolean argument `success`, and based on its value, resolve or reject the Promise accordingly.

### 2. Catch me if you can!
In this task, you need to create a function `handleResponseFromAPI(promise)` that appends handlers to the given Promise. When the Promise resolves, it should return an object with the attributes `status` and `body`. When the Promise rejects, it should return an empty Error object.

### 3. Handle multiple successful promises
In this task, you will use the functions `uploadPhoto` and `createUser` from `utils.js` to handle multiple successful promises using `Promise.all`.

### 4. Simple promise
In this task, you need to create a function `signUpUser(firstName, lastName)` that returns a resolved Promise with an object containing the provided `firstName` and `lastName`.

### 5. Reject the promises
In this task, you need to create a function `uploadPhoto(filename)` that returns a rejected Promise with an Error message.

### 6. Handle multiple promises
In this task, you need to create a function `handleProfileSignup(firstName, lastName, fileName)` that calls two other functions and returns an array containing the results of the resolved Promises.

### 7. Load balancer
In this task, you need to create a function `loadBalancer(chinaDownload, USDownload)` that takes two Promises as arguments and returns the value of the Promise that resolves first.

### 8. Throw error / try catch
In this task, you need to create a function `divideFunction(numerator, denominator)` that divides the `numerator` by the `denominator`. If the `denominator` is 0, it should throw an error with the message "cannot divide by 0".

### 9. Throw an error
In this task, you need to create a function `guardrail(mathFunction)` that executes a given function and returns an array containing the result or the error message if the function throws an error.

### 10. Await / Async (Advanced)
In this advanced task, you need to create an async function `asyncUploadUser()` that calls the `uploadPhoto` and `createUser` functions from `utils.js` and returns an object with the results of both Promises.

---

*This project is part of the ES6 curriculum for ALX.*
