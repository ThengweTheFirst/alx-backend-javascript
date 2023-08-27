# 0x06. Unittests in JS

## Resources

Read or watch:
- [Mocha documentation](https://mochajs.org/)
- [Chai](https://www.chaijs.com/)
- [Sinon](https://sinonjs.org/)
- [Express](https://expressjs.com/)
- [Request](https://www.npmjs.com/package/request)
- [How to Test NodeJS Apps using Mocha, Chai and SinonJS](https://www.digitalocean.com/community/tutorials/how-to-test-node-js-apps-using-mocha-chai-and-sinonjs)

## Learning Objectives

At the end of this project, you are expected to be able to explain to anyone, without the help of Google:

- How to use Mocha to write a test suite
- How to use different assertion libraries (Node or Chai)
- How to present long test suites
- When and how to use spies
- When and how to use stubs
- What are hooks and when to use them
- Unit testing with Async functions
- How to write integration tests with a small node server

## Requirements

- All of your code will be executed on Ubuntu 18.04 using Node 12.x.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the project folder, is mandatory
- Your code should use the `.js` extension
- When running every test with `npm run test *.test.js`, everything should pass correctly without any warning or error

## Tasks

### 0. Basic test with Mocha and Node assertion library (mandatory)

1. Install Mocha using npm.
2. Set up a script in your `package.json` to quickly run Mocha using `npm test`.
3. Create a new file named `0-calcul.js`.
4. Create a function named `calculateNumber`. It should accept two arguments (numbers) `a` and `b`.
5. The function should round `a` and `b` and return the sum of the rounded values.
6. Create a file `0-calcul.test.js` that contains test cases of this function.
7. You can assume `a` and `b` are always numbers.
8. Tests should be around the "rounded" part.

### 1. Combining descriptions (mandatory)

1. Create a new file named `1-calcul.js`.
2. Upgrade the function you created in the previous task (`0-calcul.js`).
3. Add a new argument named `type` as the first argument of the function. `type` can be `SUM`, `SUBTRACT`, or `DIVIDE` (string).
4. When `type` is `SUM`, round the two numbers, and add `a` and `b`.
5. When `type` is `SUBTRACT`, round the two numbers, and subtract `b` from `a`.
6. When `type` is `DIVIDE`, round the two numbers, and divide `a` by `b`. If the rounded value of `b` is equal to 0, return the string "Error".
7. Create a file `1-calcul.test.js` that contains test cases of this function.
8. You can assume `a` and `b` are always numbers.
9. Usage of `describe` will help you organize your test cases.

### 2. Basic test using Chai assertion library (mandatory)

1. Install Chai with npm.
2. Copy the file `1-calcul.js` to a new file named `2-calcul_chai.js` (same content, same behavior).
3. Copy the file `1-calcul.test.js` to a new file named `2-calcul_chai.test.js`.
4. Rewrite the test suite using `expect` from Chai.

### 3. Spies (mandatory)

1. Install Sinon with npm.
2. Create a new file named `utils.js`.
3. Create a new module named `Utils`.
4. Create a property named `calculateNumber` and paste your previous code in the function.
5. Export the `Utils` module.
6. Create a new file named `3-payment.js`.
7. Create a new function named `sendPaymentRequestToApi`. The function takes two arguments `totalAmount` and `totalShipping`.
8. The function calls the `Utils.calculateNumber` function with type `SUM`, `totalAmount` as `a`, `totalShipping` as `b`, and displays in the console the message `The total is: <result of the sum>`.
9. Create a new file named `3-payment.test.js` and add a new suite named `sendPaymentRequestToApi`.
10. Use `sinon.spy` to make sure the math used for `sendPaymentRequestToApi(100, 20)` is the same as `Utils.calculateNumber('SUM', 100, 20)`.

### 4. Stubs (mandatory)

1. Create a new file `4-payment.js`, and copy the code from `3-payment.js` (same content, same behavior).
2. Create a new file `4-payment.test.js`, and copy the code from `3-payment.test.js`.
3. Stub the function `Utils.calculateNumber` to always return the same number 10.
4. Verify that the stub is being called with `type = SUM`, `a = 100`, and `b = 20`.
5. Add a spy to verify that `console.log` is logging the correct message `The total is: 10`.

### 5. Hooks (mandatory)

1. Copy the code from `4-payment.js` into a new file `5-payment.js` (same content/same behavior).
2. Create a new file `5-payment.test.js`.
3. Inside the same `describe`, create 2 tests:
   - The first test will call `sendPaymentRequestToAPI` with `100` and `20`:
     - Verify that the console is logging the string `The total is: 120`.
     - Verify that the console is only called once.
   - The second test will call `sendPaymentRequestToAPI` with `10` and `10`:
     - Verify that the console is logging the string `The total is: 20`.
     - Verify that the console is only called once.
4. Use a `beforeEach` and an `afterEach` hook to complete this exercise.

### 6. Async tests with `done` (mandatory)

1. Create a new file `6-payment_token.js`:
2. Create a new function named `getPaymentTokenFromAPI`.
3. The function will take an argument called `success` (boolean).
4. When `success` is `true`, it should return a resolved promise with the object `{ data: 'Successful response from the API' }`.
5. Otherwise, the function should do nothing

.
6. Create a new file `6-payment_token.test.js` and write a test suite named `getPaymentTokenFromAPI`.

### 7. Skip (mandatory)

1. Using the file `7-skip.test.js`, make the test suite pass without fixing or removing the failing test.
2. It description must stay the same.

### 8. Basic Integration testing (mandatory)

1. In a folder `8-api` located at the root of the project directory, copy the provided `package.json` over.
2. Create a new file named `api.js`:
   - Create an instance of Express called `app`.
   - Listen to port `7865` and log "API available on localhost port 7865" to the browser console when the express server is started.
   - For the route GET `/`, return the message "Welcome to the payment system".
3. Create a new file named `api.test.js` and write a test suite for the index page.
4. Make sure the server is running for the test to pass.

### 9. Regex integration testing (mandatory)

1. In a folder `9-api`, reuse the previous project in `8-api` (package.json, api.js, and api.test.js).
2. Modify the file `api.js`:
   - Add a new endpoint: GET `/cart/:id`.
   - `:id` must be only a number (validation must be in the route definition).
   - When accessed, the endpoint should return "Payment methods for cart :id".
3. Modify the file `api.test.js` and add a new test suite for the cart page.

### 10. Deep equality & Post integration testing (mandatory)

1. In a folder `10-api`, reuse the previous project in `9-api` (package.json, api.js, and api.test.js).
2. Modify the file `api.js`:
   - Add an endpoint GET `/available_payments` that returns an object with the following structure:
   ```
   {
     payment_methods: {
       credit_cards: true,
       paypal: false
     }
   }
   ```
   - Add an endpoint POST `/login` that returns the message "Welcome :username" where `:username` is the value of the body variable `userName`.
3. Modify the file `api.test.js` and add test suites for the `/login` and `/available_payments` endpoints.

