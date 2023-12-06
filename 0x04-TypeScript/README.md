# ALX Frontend JavaScript Curriculum

## TypeScript Short Specialization

**Instructor:** Johann Kerbrat, Engineering Manager at Uber Works

**Weight:** 1

**Project Duration:** Dec 6, 2023, 6:00 AM - Dec 7, 2023, 6:00 AM

**Manual QA Review:** Required (request it when you finish the project)

## Resources

- [TypeScript in 5 minutes](#)
- [TypeScript documentation](#)

## Learning Objectives

By the end of this project, you should be able to explain to anyone, without the help of Google:

1. Basic types in TypeScript
2. Interfaces, Classes, and functions
3. How to work with the DOM and TypeScript
4. Generic types
5. How to use namespaces
6. How to merge declarations
7. How to use an ambient Namespace to import an external library
8. Basic nominal typing with TypeScript

## Requirements

### Editors

Allowed editors: vi, vim, emacs, Visual Studio Code

### General

- All your files should end with a new line
- All your files will be transpiled on Ubuntu 18.04
- Your TS scripts will be checked with Jest (version 24.9.*)
- A README.md file, at the root of the folder of the project, is mandatory
- Your code should use the ts extension when possible
- The TypeScript compiler should not show any warning or error when compiling your code

## Configuration Files

Please use the provided configuration files for the following tasks:

- [package.json](task_0/package.json)
- [.eslintrc.js](task_0/.eslintrc.js)
- [tsconfig.json](task_0/tsconfig.json)
- [webpack.config.js](task_0/webpack.config.js)

## Tasks

### 0. Creating an interface for a student

#### Mandatory

1. Copy the provided configuration files into the `task_0` directory: `package.json`, `.eslintrc.js`, `tsconfig.json`, `webpack.config.js`.

2. Write your code in the `main.ts` file:

    - Write an interface named `Student` that accepts the following elements: `firstName` (string), `lastName` (string), `age` (number), and `location` (string).

    - Create two students, and create an array named `studentsList` containing the two variables.

    - Using Vanilla JavaScript, render a table, and for each element in the array, append a new row to the table. Each row should contain the first name of the student and the location.

    - Requirements:
        - When running, Webpack should return "No type errors found."
        - Every variable should use TypeScript when possible.

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_0/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_0/js/main.ts), [task_0/package.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_0/package.json), [task_0/.eslintrc.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_0/.eslintrc.js), [task_0/tsconfig.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_0/tsconfig.json), [task_0/webpack.config.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_0/webpack.config.js)

### 1. Let's build a Teacher interface

#### Mandatory

1. Create a directory `task_1` and copy these configuration files into this folder: `package.json`, `tsconfig.json`, `webpack.config.js`.

2. Write your code in the `main.ts` file:

    - Create an interface named `Teacher` with attributes `firstName` (string) and `lastName` (string). These two attributes should only be modifiable when a Teacher is first initialized.

    - Add the following attributes:
        - `fullTimeEmployee` (boolean): This attribute should always be defined.
        - `yearsOfExperience` (number): This attribute is optional.
        - `location` (string): This attribute should always be defined.

    - Add the possibility to add any attribute to the Object like `contract` (boolean) without specifying the name of the attribute. Example:

        ```typescript
        const teacher3: Teacher = {
          firstName: 'John',
          fullTimeEmployee: false,
          lastName: 'Doe',
          location: 'London',
          contract: false,
        };
        console.log(teacher3);
        ```

        Output:

        ```
        Object
        contract: false
        firstName: "John"
        fullTimeEmployee: false
        lastName: "Doe"
        location: "London"
        ```

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_1/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_1/js/main.ts), [task_1/webpack.config.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_1/webpack.config.js), [task_1/tsconfig.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_1/tsconfig.json), [task_1/package.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_1/package.json)

### 2. Extending the Teacher class

#### Mandatory

1. Write an interface named `Directors` that extends `Teacher`. It requires an attribute named `numberOfReports` (number).

    - Example:

        ```typescript
        const director1: Directors = {
          firstName: 'John',
          lastName: 'Doe',
          location: 'London',
          fullTimeEmployee: true,
          numberOfReports: 17,
        };
        console.log(director1);
        ```

        Output:

        ```
        Object
        firstName: "John"
        fullTimeEmployee: true
        lastName: "Doe"
        location: "London"
        numberOfReports: 17
        ```

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-Type

Script](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_2/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_2/js/main.ts)

### 3. Printing teachers

#### Mandatory

1. Write a function `printTeacher`:

    - It accepts two arguments `firstName` and `lastName`.

    - It returns the first letter of the `firstName` and the full `lastName`.

    - Example: `printTeacher("John", "Doe")` -> `J. Doe`

    - Write an interface for the function named `printTeacherFunction`.

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_3/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_3/js/main.ts)

### 4. Writing a class

#### Mandatory

1. Write a Class named `StudentClass`:

    - The constructor accepts `firstName` (string) and `lastName` (string) arguments.

    - The class has a method named `workOnHomework` that returns the string "Currently working".

    - The class has a method named `displayName`. It returns the `firstName` of the student.

    - The constructor of the class should be described through an Interface.

    - The class should be described through an Interface.

    - Requirements:
        - You can reuse the Webpack configuration from the previous exercise to compile the code.
        - When running `npm run build`, no TypeScript error should be displayed.
        - Every variable should use TypeScript when possible.

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_4/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_4/js/main.ts)

### 5. Advanced types Part 1

#### Mandatory

1. Create the `DirectorInterface` interface with the 3 expected methods:

    - `workFromHome()` returning a string
    - `getCoffeeBreak()` returning a string
    - `workDirectorTasks()` returning a string

2. Create the `TeacherInterface` interface with the 3 expected methods:

    - `workFromHome()` returning a string
    - `getCoffeeBreak()` returning a string
    - `workTeacherTasks()` returning a string

3. Create a class `Director` that will implement `DirectorInterface`:

    - `workFromHome` should return the string "Working from home".
    - `getCoffeeBreak` should return the string "Getting a coffee break".
    - `workDirectorTasks` should return the string "Getting to director tasks".

4. Create a class `Teacher` that will implement `TeacherInterface`:

    - `workFromHome` should return the string "Cannot work from home".
    - `getCoffeeBreak` should return the string "Cannot have a break".
    - `workTeacherTasks` should return the string "Getting to work".

5. Create a function `createEmployee` with the following requirements:

    - It can return either a `Director` or a `Teacher` instance.
    - It accepts 1 argument:
        - `salary` (either number or string).
    - If `salary` is a number and less than 500 - It should return a new `Teacher`. Otherwise, it should return a `Director`.

    - Example:

        ```typescript
        console.log(createEmployee(200));
        // Teacher

        console.log(createEmployee(1000));
        // Director

        console.log(createEmployee('$500'));
        // Director
        ```

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_5/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_5/js/main.ts)

### 6. Creating functions specific to employees

#### Mandatory

1. Write a function `isDirector`:

    - It accepts `employee` as an argument.
    - It will be used as a type predicate and if the employee is a director.

2. Write a function `executeWork`:

    - It accepts `employee` as an argument.
    - If the employee is a `Director`, it will call `workDirectorTasks`.
    - If the employee is a `Teacher`, it will call `workTeacherTasks`.

    - Example:

        ```typescript
        executeWork(createEmployee(200));
        // Getting to work

        executeWork(createEmployee(1000));
        // Getting to director tasks
        ```

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_5/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_5/js/main.ts)

### 7. String literal types

#### Mandatory

1. Write a String literal type named `Subjects` allowing a variable to have the value `Math` or `History` only.

2. Write a function named `teachClass`:

    - It takes `todayClass` as an argument.
    - It will return the string "Teaching Math" if `todayClass` is `Math`.
    - It will return the string "Teaching History" if `todayClass` is `History`.

    - Example:

        ```typescript
        teachClass('Math');
        // Teaching Math

        teachClass('History');
        // Teaching History
        ```

    - Repo:
        - GitHub repository: [alx-frontend-javascript](https://github.com/Dr-dyrane/alx-frontend-javascript)
        - Directory: [0x04-TypeScript](https://github.com/Dr-dyrane/alx-frontend-javascript/tree/main/0x04-TypeScript)
        - File: [task_6/js/main.ts](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_6/js/main.ts)

### 8. Ambient Namespaces

#### Mandatory

1. Create a directory called `task_8` and copy these configuration files into it: [package.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_8/package.json), [webpack.config.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_8/webpack.config.js), [tsconfig.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_8/tsconfig.json).

2. Inside a file named `interface.ts`, create:

    - A type `RowID` and set it equal to `number`.
    - An interface `RowElement` that contains these 3 fields:
        - `firstName: string`
        - `lastName: string`
        - `age?: number`

3. Download a library called `crud.js` and copy this file into the `task_8/js` directory. Here's the content of the `crud.js` file:

```javascript
// crud.js

export function insertRow(row) {
  console.log('Insert row', row);
  return Math.floor(Math.random() * Math.floor(1000));
}

export function deleteRow(rowId) {
  console.log('Delete row id', rowId);
  return;
}

export function updateRow(rowId, row) {
  console.log(`Update row ${rowId}`, row);
  return rowId;
}
```

4. Write an ambient file within `task_8/js`, named `crud.d.ts`, containing the type declarations for each crud function. At the top of the file, import `RowID` and `RowElement` from `interface.ts`.

5. In `main.ts`:

    - At the top of the file, create a triple slash directive that includes all the dependencies from `crud.d.ts`.
    - Import the `rowID` type and `rowElement` from `interface.ts`.
    - Import everything from `crud.js` as `CRUD`.
    - Create an object called `row` with the type `RowElement` with the fields set to these values:
        - `firstName: Guillaume`
        - `lastName: Salva`
    - Create a const variable named `newRowID` with the type `RowID` and assign the value the `insertRow` command.
    - Create a const variable named `updatedRow` with the type `RowElement` and update `row` with an `age` field set to `23`.
    - Finally, call the `updateRow` and `deleteRow` commands.

Here's how your `main.ts` file might look like:

```typescript
// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from './crud.js';

const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

const newRowID: RowID = CRUD.insertRow(row);
console.log(`Insert row result: ${newRowID}`);

const updatedRow: RowElement = { ...row, age: 23 };
CRUD.updateRow(newRowID, updatedRow);
console.log(`Update row result: ${newRowID}`);

CRUD.deleteRow(newRowID);
console.log(`Delete row id: ${newRowID}`);
```

This should satisfy the requirements for Task 8.

### 9. Namespace & Declaration Merging

#### Mandatory

1. Create a directory called `task_9` and copy these configuration files into it: [package.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_9/package.json), [webpack.config.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_9/webpack.config.js), [tsconfig.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_9/tsconfig.json).

2. Inside a file named `calculateSalary.ts`, create:

    - A namespace called `Employee`.
    - Inside the namespace, declare an interface named `Salary` with the following properties:
        - `basic: number`
        - `bonus: number`

3. Inside the same namespace (`Employee`), declare a function named `calculateTotalSalary` that accepts a parameter of type `Salary` and returns a number representing the total salary (sum of basic and bonus).

```typescript
// calculateSalary.ts

namespace Employee {
  interface Salary {
    basic: number;
    bonus: number;
  }

  export function calculateTotalSalary(salary: Salary): number {
    return salary.basic + salary.bonus;
  }
}
```

4. Create another file named `calculateSalaryExtension.ts` and declare a new interface named `Salary` inside the `Employee` namespace. This new interface should extend the previous `Salary` interface and include an additional property:

    - `allowance: number`

```typescript
// calculateSalaryExtension.ts

namespace Employee {
  interface Salary {
    allowance: number;
  }
}
```

5. In `main.ts`:

    - Import the `calculateTotalSalary` function and the `Salary` interface from `calculateSalary.ts`.
    - Create a variable named `employeeSalary` with the type `Employee.Salary` and assign the following values:
        - `basic: 5000`
        - `bonus: 1000`
    - Call the `calculateTotalSalary` function with `employeeSalary` and log the result.

Here's how your `main.ts` file might look like:

```typescript
// main.ts

import { Employee } from './calculateSalary';

const employeeSalary: Employee.Salary = {
  basic: 5000,
  bonus: 1000,
};

const totalSalary = Employee.calculateTotalSalary(employeeSalary);
console.log(`Total Salary: ${totalSalary}`);
```

This should fulfill the requirements for Task 9.

### 10. Nominal Typing

1. Create a directory named `task_10` and copy the following configuration files into it: [package.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_10/package.json), [webpack.config.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_10/webpack.config.js), [tsconfig.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_10/tsconfig.json).

2. Inside a file named `nominalTyping.ts`, create a class named `NominalString`:

    - The class should take a private string parameter in its constructor.
    - Create a getter method `value` to retrieve the string value.

```typescript
// nominalTyping.ts

class NominalString {
  private stringValue: string;

  constructor(value: string) {
    this.stringValue = value;
  }

  get value(): string {
    return this.stringValue;
  }
}
```

3. In `main.ts`:

    - Import the `NominalString` class from `nominalTyping.ts`.
    - Create two instances of `NominalString` with different string values.
    - Check if the instances are equal using the strict equality operator (`===`) and log the result.

```typescript
// main.ts

import { NominalString } from './nominalTyping';

const string1 = new NominalString('Hello');
const string2 = new NominalString('Hello');

const areEqual = string1 === string2;
console.log(`Are the instances equal? ${areEqual}`);
```

This will demonstrate the concept of nominal typing, where instances with the same underlying type are not considered equal.

### 11. JSX Integration

1. Create a directory named `task_11` and copy the provided configuration files into it: [package.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_11/package.json), [webpack.config.js](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_11/webpack.config.js), [tsconfig.json](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x04-TypeScript/task_11/tsconfig.json).

2. Create a file named `jsxIntegration.tsx`:

    - Write a simple React component using JSX that renders a `<div>` with the text content "Hello, JSX!".

```tsx
// jsxIntegration.tsx

import React from 'react';

const MyComponent: React.FC = () => {
  return <div>Hello, JSX!</div>;
};

export default MyComponent;
```

3. In `main.tsx`:

    - Import the `jsxIntegration.tsx` file and use the `MyComponent` React component.

```tsx
// main.tsx

import React from 'react';
import MyComponent from './jsxIntegration';

const App: React.FC = () => {
  return (
    <div>
      <h1>JSX Integration</h1>
      <MyComponent />
    </div>
  );
};

export default App;
```

4. Run the application using your preferred method (e.g., `npm start`) and check if the React component renders successfully.

This task demonstrates the integration of JSX in a TypeScript file, showcasing the use of React components with TypeScript.

### Conclusion

You've now completed the tasks outlined in the ALX Frontend JavaScript Curriculum for the TypeScript Short Specialization.