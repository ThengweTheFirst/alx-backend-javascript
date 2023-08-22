# 0x05. NodeJS Basics

## Resources
Read or watch the following resources to get started:

- [Node JS getting started](https://nodejs.org/en/docs/guides/getting-started-guide/)
- [Process API documentation](https://nodejs.org/api/process.html)
- [Child process](https://nodejs.org/api/child_process.html)
- [Express getting started](https://expressjs.com/en/starter/installing.html)
- [Mocha documentation](https://mochajs.org/)
- [Nodemon documentation](https://nodemon.io/)

## Learning Objectives
By the end of this project, you will be able to explain the following concepts without the need for external resources:

- Running JavaScript using NodeJS
- Using NodeJS modules
- Using specific Node JS modules to read files
- Using the process object to access command line arguments and the environment
- Creating a small HTTP server using Node JS
- Creating a small HTTP server using Express JS
- Creating advanced routes with Express JS
- Using ES6 with Node JS with Babel-node
- Using Nodemon to develop faster

## Requirements
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files will be interpreted/compiled on Ubuntu 18.04 LTS using node (version 12.x.x)
- All your files should end with a new line
- A `README.md` file, at the root of the project folder, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using Jest, and the command `npm run test` will be used
- Your code will be verified against lint using ESLint
- Your code needs to pass all tests and lint checks. You can verify the entire project by running `npm run full-test`
- All of your functions/classes must be exported using this format: `module.exports = myFunction;`

## Provided Files
- `database.csv`: Contains data about students
- `firstname,lastname,age,field`
- `package.json`: Dependency and script information for the project
- `babel.config.js`: Configuration for Babel transpiler
- `.eslintrc.js`: Configuration for ESLint

**Note:** Run `$ npm install` when you have the `package.json` to install required dependencies.

## Tasks
### 0. Executing Basic JavaScript with Node JS
Create a function named `displayMessage` in the file `0-console.js` that prints the provided string argument to the STDOUT.

**Usage:**
```javascript
const displayMessage = require('./0-console');

displayMessage("Hello NodeJS!");
```
Output:
```
Hello NodeJS!
```
[File: 0-console.js](0x05-Node_JS_basic/0-console.js)

### 1. Using Process stdin
Create a program named `1-stdin.js` that displays a message, takes user input for their name, and then displays the entered name. When the program is terminated, it should display a closing message.

**Usage:**
```shell
$ node 1-stdin.js
Welcome to Holberton School, what is your name?
Bob
Your name is: Bob
```
```shell
$ echo "John" | node 1-stdin.js
Welcome to Holberton School, what is your name?
Your name is: John
This important software is now closing
```
[File: 1-stdin.js](0x05-Node_JS_basic/1-stdin.js)

### 2. Reading a File Synchronously with Node JS
Create a function named `countStudents` in the file `2-read_file.js`. This function reads a CSV database file and logs the number of students in each field along with their names.

**Usage:**
```javascript
const countStudents = require('./2-read_file');

countStudents("nope.csv"); // Should throw an error

countStudents("database.csv"); // Should log student counts and names
```
[File: 2-read_file.js](0x05-Node_JS_basic/2-read_file.js)

### 3. Reading a File Asynchronously with Node JS
Create a function named `countStudents` in the file `3-read_file_async.js` that reads a CSV database file asynchronously using promises and logs the student counts and names.

**Usage:**
```javascript
const countStudents = require('./3-read_file_async');

countStudents("nope.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });

countStudents("database.csv")
  .then(() => {
    console.log("Done!");
  })
  .catch((error) => {
    console.log(error);
  });
console.log("After!");
```
[File: 3-read_file_async.js](0x05-Node_JS_basic/3-read_file_async.js)

### 4. Create a Small HTTP Server using Node's HTTP Module
Create an HTTP server using the `http` module in the file `4-http.js`. The server should listen on port 1245 and display "Hello Holberton School!" in the page body for any endpoint.

**Usage:**
```shell
$ node 4-http.js
```
In a separate terminal:
```shell
$ curl localhost:1245 && echo ""
Hello Holberton School!
```
[File: 4-http.js](0x05-Node_JS_basic/4-http.js)

### 5. Create a More Complex HTTP Server using Node's HTTP Module
Create a more complex HTTP server using the `http` module in the file `5-http.js`. The server should listen on port 1245 and return plain text for different endpoints.

**Usage:**
```shell
$ node 5-http.js database.csv
```
In a separate terminal:
```shell
$ curl localhost:1245 && echo ""
Hello Holberton School!
```
```shell
$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```
[File: 5-http.js](0x05-Node_JS_basic/5-http.js)

### 6. Create a Small HTTP Server using Express
Install Express and create an HTTP server using Express in the file `6-http_express.js`. The server should listen on port 1245 and display "Hello Holberton School!" for the endpoint '/'. 

**Usage:**
```shell
$ node 6-http_express.js
```
In a separate terminal:
```shell
$ curl localhost:1245 && echo ""
Hello Holberton School!
```
[File: 6-http_express.js](0x05-Node_JS_basic/6-http_express.js)

### 7. Create a More

 Complex HTTP Server using Express
Create a more complex HTTP server using Express in the file `7-http_express.js`. The server should listen on port 1245 and return plain text for different endpoints.

**Usage:**
```shell
$ node 7-http_express.js database.csv
```
In a separate terminal:
```shell
$ curl localhost:1245 && echo ""
Hello Holberton School!
```
```shell
$ curl localhost:1245/students && echo ""
This is the list of our students
Number of students in CS: 6. List: Johann, Arielle, Jonathan, Emmanuel, Guillaume, Katie
Number of students in SWE: 4. List: Guillaume, Joseph, Paul, Tommy
```
```shell
$ curl localhost:1245/students/SWE && echo ""
List: Guillaume, Joseph, Paul, Tommy
```
```shell
$ curl localhost:1245/students/French -vvv && echo ""
Major parameter must be CS or SWE
```
[File: 7-http_express.js](0x05-Node_JS_basic/7-http_express.js)

### 8. Organize a Complex HTTP Server using Express
In a directory named `full_server`, create a more organized Express server with controllers and routes. Use Babel and ES6 features for this implementation.

For detailed instructions, refer to the provided task descriptions and files.
