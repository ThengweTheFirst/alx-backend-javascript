# 0x01. ES6 Promises

This project covers the concept of ES6 Promises in JavaScript and how to work with them. By completing the tasks in this project, you will gain a deeper understanding of how Promises work, how to handle async operations, and how to handle errors using Promises. 

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without relying on external resources:

- Promises: what they are, why they are used, and how to create and use them.
- Using the `then`, `resolve`, and `catch` methods to handle Promises.
- Utilizing the various methods available on the Promise object.
- Working with the `await` operator and `async` functions.
- Handling errors using `try` and `catch` blocks.

## Requirements

- All the code should be written in JavaScript (ES6).
- The project should be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x.
- Allowed editors: vi, vim, emacs, Visual Studio Code.
- Files should have a `.js` extension.
- Code will be tested using Jest and the command `npm run test`.
- Code will be verified against lint using ESLint.

## Setup

1. Install NodeJS 12.11.x in your home directory:

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v
npm -v
```

2. Install Jest, Babel, and ESLint in your project directory:

```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli
npm install --save-dev eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest
```

## Tasks

This project includes several tasks that cover different aspects of working with Promises in JavaScript. Each task has its own JavaScript file and a corresponding test file for validation.

- **0. Keep every promise you make and only make promises you can keep**: Introduction to creating and using Promises.

- **1. Don't make a promise...if you know you can't keep it**: Creating Promises with resolve and reject methods.

- **2. Catch me if you can!**: Handling Promise resolution and rejection using the `then` method.

- **3. Handle multiple successful promises**: Using `Promise.all` to handle multiple Promises simultaneously.

- **4. Simple promise**: Creating a simple resolved Promise.

- **5. Reject the promises**: Creating a rejected Promise.

- **6. Handle multiple promises**: Using `Promise.allSettled` to handle multiple Promises and their resolutions or rejections.

- **7. Load balancer**: Implementing a load balancer to prioritize the fastest response from two Promises.

- **8. Throw error / try catch**: Handling errors using the `try` and `catch` block.

- **9. Throw an error**: Creating and handling a custom error.

- **10. Await / Async**: Working with `async` and `await` for asynchronous operations.

Remember to run `npm install` in your project directory to install the required dependencies.

## Resources

Read or watch the provided resources to gain a deeper understanding of Promises, async/await, and error handling in JavaScript:

- [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [JavaScript Promise: An introduction](https://web.dev/promises/)
- [Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
- [Async](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [Throw / Try](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

## Completion and Beyond

Completing these tasks will give you a solid understanding of working with Promises and async operations in JavaScript. Remember that practice is key to mastering these concepts, so feel free to experiment further and explore more complex scenarios where Promises are used. This knowledge will be invaluable as you continue to develop your skills as a JavaScript programmer.
