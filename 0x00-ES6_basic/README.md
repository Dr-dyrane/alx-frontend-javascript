# ALX Frontend JavaScript Specialization - ES6 Basics

Welcome to the ES6 Basics module of the ALX Frontend JavaScript Specialization! In this project, you will explore the concepts of Modern JavaScript and Software Linting while focusing on ES6 features. This project is inspired by the work of Johann Kerbrat, an Engineering Manager at Uber Works.

## Concepts

- Modern JavaScript
- Software Linter

## Resources

- [ARROWFUNCTIONMEME](#)
- [ECMAScript 6 - ECMAScript 2015](#)
- [Statements and declarations](#)
- [Arrow functions](#)
- [Default parameters](#)
- [Rest parameter](#)
- [Javascript ES6 — Iterables and Iterators](#)

## Learning Objectives

Upon completion of this project, you should be able to explain the following concepts without assistance:

- What ES6 is
- New features introduced in ES6
- The difference between a constant and a variable
- Block-scoped variables
- Arrow functions and function parameters defaulting to them
- Rest and spread function parameters
- String templating in ES6
- Object creation and their properties in ES6
- Iterators and for-of loops

## Requirements

### General

- All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
- Allowed editors: vi, vim, emacs, Visual Studio Code
- All your files should end with a new line
- A `README.md` file, at the root of the folder of the project, is mandatory
- Your code should use the `.js` extension
- Your code will be tested using the Jest Testing Framework
- Your code will be analyzed using the linter ESLint along with specific rules that we’ll provide
- All of your functions must be exported

### Setup

1. Install NodeJS 12.11.x in your home directory:

    ```bash
    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    ```

    Verify the installation:

    ```bash
    nodejs -v
    npm -v
    ```

2. Install Jest, Babel, and ESLint in your project directory:

    ```bash
    npm install --save-dev jest
    npm install --save-dev babel-jest @babel/core @babel/preset-env
    npm install --save-dev eslint
    ```

### Configuration files

#### `package.json`

```json
{
  "scripts": {
    "lint": "./node_modules/.bin/eslint",
    "check-lint": "lint [0-9]*.js",
    "dev": "npx babel-node",
    "test": "jest",
    "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
  },
  "devDependencies": {
    "@babel/core": "^7.6.0",
    "@babel/node": "^7.8.0",
    "@babel/preset-env": "^7.6.0",
    "eslint": "^6.4.0",
    "eslint-config-airbnb-base": "^14.0.0",
    "eslint-plugin-import": "^2.18.2",
    "eslint-plugin-jest": "^22.17.0",
    "jest": "^24.9.0"
  }
}
```

#### `babel.config.js`

```javascript
module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
  ],
};
```

#### `.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: false,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
    'plugin:jest/all',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['jest'],
  rules: {
    'no-console': 'off',
    'no-shadow': 'off',
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
  },
  overrides:[
    {
      files: ['*.js'],
      excludedFiles: 'babel.config.js',
    }
  ]
};
```

### Finally…

Don’t forget to run 
```
npm install
```
from the terminal of your project folder to install all necessary project dependencies.

Maintain the momentum, and happy coding! 🚀

**Author: [Dr-dyrane](https://github.com/Dr-dyrane) | Email: ogranya.alex@gmail.com**