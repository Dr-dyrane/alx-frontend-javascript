# ES6 Classes and Object-Oriented Programming in JavaScript

## Overview

This project focuses on implementing and understanding ES6 classes and Object-Oriented Programming (OOP) concepts in JavaScript. The tasks cover various aspects such as class definition, methods, static methods, inheritance, getters, setters, and more.

## Project Structure

The project is organized into multiple tasks, each implemented in a separate JavaScript file. The tasks cover different aspects of ES6 classes and OOP, and each file is associated with specific learning objectives.

### Task List

1. **ClassRoom (0-classroom.js):**
   - Define a class named ClassRoom.
   - Accept one attribute named maxStudentsSize (Number).
   - Implement a basic usage example.

2. **Initialize ClassRooms (1-make_classrooms.js):**
   - Import the ClassRoom class.
   - Implement a function named initializeRooms to create an array of ClassRoom objects with specific sizes.

3. **HolbertonCourse (2-hbtn_course.js):**
   - Implement a class named HolbertonCourse.
   - Include constructor attributes: name (String), length (Number), students (Array of Strings).
   - Implement getters and setters for each attribute.
   - Verify attribute types during object creation.

4. **Currency (3-currency.js):**
   - Implement a class named Currency.
   - Include constructor attributes: code (String), name (String).
   - Implement getters and setters for each attribute.
   - Implement a method displayFullCurrency.

5. **Pricing (4-pricing.js):**
   - Import the Currency class.
   - Implement a class named Pricing with amount (Number) and currency (Currency) attributes.
   - Implement getters, setters, and a method displayFullPrice.
   - Implement a static method convertPrice.

6. **Building (5-building.js):**
   - Implement an abstract class named Building with a sqft (Number) attribute.
   - Implement a getter for sqft.
   - Specify that any class extending Building must implement the evacuationWarningMessage method.

7. **SkyHighBuilding (6-sky_high.js):**
   - Import the Building class.
   - Implement a class named SkyHighBuilding that extends Building.
   - Include constructor attributes: sqft (Number), floors (Number).
   - Implement getters for sqft and floors.
   - Override the evacuationWarningMessage method.

8. **Airport (7-airport.js):**
   - Implement a class named Airport with name (String) and code (String) attributes.
   - Implement getters for name and code.
   - Provide a default string description.

9. **HolbertonClass (8-hbtn_class.js):**
   - Implement a class named HolbertonClass with size (Number) and location (String) attributes.
   - Implement casting to Number and String.

10. **Car (10-car.js):**
    - Implement a class named Car with brand (String), motor (String), and color (String) attributes.
    - Include a method cloneCar that returns a new object of the class.

11. **EVCar (100-evcar.js):**
    - Import the Car class.
    - Implement a class named EVCar that extends Car.
    - Include an additional attribute range (String).
    - Override the cloneCar method to return an instance of Car for privacy reasons.

### Additional Files

- **Configuration Files:**
  - package.json, babel.config.js, .eslintrc.js: Configuration files for NodeJS, Babel, and ESLint.

- **Setup Instructions:**
  - Instructions for installing NodeJS 12.11.x, Jest, Babel, and ESLint.

## Instructions for Running the Project

1. Install NodeJS 12.11.x following the provided setup instructions.
2. In the project directory, run `npm install` to install Jest, Babel, and ESLint.
3. Execute the tasks using `npm run dev <filename>` for each task file.
4. Run the complete test suite using `npm run full-test` to verify the entire project.

## Learning Objectives

At the end of this project, you should be able to:

1. Define a Class in JavaScript.
2. Add methods to a class, including static methods.
3. Extend a class from another class using inheritance.
4. Understand and implement metaprogramming concepts using symbols.
5. Use getters and setters to control access to class attributes.

## Project Deadline and Testing

- The project starts on Nov 30, 2023, at 6:00 AM, and must end by Dec 1, 2023, at 6:00 AM.
- A checker was released on Nov 30, 2023, at 12:00 PM.
- An auto review will be launched at the deadline.

## Author Information

- **Author:** Johann Kerbrat
- **Role:** Engineering Manager at Uber Works