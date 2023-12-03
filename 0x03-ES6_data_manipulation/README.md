# ES6 Data Manipulation Project

## Overview

This project delves into advanced data manipulation in JavaScript using ES6 features. The focus is on working with arrays, typed arrays, and various data structures like Set, Map, and WeakMap.

- Learn how to use `map`, `filter`, and `reduce` on arrays.
- Explore Typed Arrays for efficient manipulation of binary data.
- Understand the Set, Map, and WeakMap data structures and their applications.

## Technologies & Tools 🛠️

[![Jest](https://img.shields.io/badge/≡-Jest-C21325?logo=Jest&style=flat-square&labelColor=282828&logoColor=C21325)](https://jestjs.io/)
[![Git](https://img.shields.io/badge/≡-Git-F05032?logo=git&style=flat-square&labelColor=282828)](https://git-scm.com/)
[![Ubuntu](https://img.shields.io/badge/≡-Ubuntu-E95420?&style=flat-square&logo=Ubuntu&labelColor=282828)](https://ubuntu.com/)
[![Babel](https://img.shields.io/badge/≡-Babel-F9DC3E?logo=Babel&style=flat-square&labelColor=282828)](https://babeljs.io/)
[![JavaScript](https://img.shields.io/badge/≡-JavaScript-F7DF1E?logo=javascript&style=flat-square&labelColor=282828)](https://developer.mozilla.org/en-US/docs/Web/javascript)
[![GNU_Bash](https://img.shields.io/badge/≡-GNU_Bash-4EAA25?logo=GNU-Bash&style=flat-square&labelColor=282828)](https://www.gnu.org/software/bash/)
[![Nodejs](https://img.shields.io/badge/≡-Nodejs-339933?logo=Node.js&style=flat-square&labelColor=282828)](https://nodejs.org/en/)
[![Vim](https://img.shields.io/badge/≡-Vim-019733?logo=Vim&style=flat-square&logoColor=019733&labelColor=282828)](https://www.vim.org/)
[![Vagrant](https://img.shields.io/badge/≡-Vagrant-1563FF?logo=vagrant&style=flat-square&logoColor=1563FF&labelColor=282828)](https://www.vagrantup.com/)
[![VS_Code](https://img.shields.io/badge/≡-VS_Code-007ACC?logo=visual-studio-code&style=flat-square&logoColor=007ACC&labelColor=282828)](https://code.visualstudio.com/)
[![ESLint](https://img.shields.io/badge/≡-ESLint-4B32C3?logo=ESLint&style=flat-square&labelColor=282828&logoColor=4B32C3)](https://eslint.org/)
[![GitHub](https://img.shields.io/badge/≡-GitHub-181717?logo=GitHub&style=flat-square&labelColor=282828)](https://github.com/)

---

## Resources 📚

Read or watch:

- [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Typed Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Typed_arrays)
- [Set Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Map Data Structure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)

---

## Requirements 🔨

- Ubuntu 18.04 LTS using NodeJS 12.22.x
- Jest Testing Framework
- ESLint

### Install NodeJS 12.22.x

```bash
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
```

### Check version

```bash
nodejs -v
npm -v
```

### Install Jest, Babel, and ESLint

```bash
npm install --save-dev jest
npm install --save-dev babel-jest @babel/core @babel/preset-env
npm install --save-dev eslint
npm install
```

---

## Files 📁

### [0. Basic list of objects](./0-get_list_students.js)

This file provides a basic list of objects, laying the foundation for further manipulation.

### [1. More mapping](./1-get_list_student_ids.js)

Explore advanced mapping techniques on arrays, focusing on extracting student IDs.

### [2. Filter](./2-get_students_by_loc.js)

Learn how to filter students based on their location.

### [3. Reduce](./3-get_ids_sum.js)

Implement the reduce function to calculate the sum of student IDs.

### [4. Combine](./4-update_grade_by_city.js)

Combine array manipulation techniques to update grades based on the student's city.

### [5. Typed Arrays](./5-typed_arrays.js)

Understand and work with Typed Arrays for efficient binary data manipulation.

### [6. Set data structure](./6-set.js)

Explore the Set data structure and its applications.

### [7. More set data structure](./7-has_array_values.js)

Extend your knowledge of Set by checking for array values.

### [8. Clean set](./8-clean_set.js)

Learn how to clean and modify sets.

### [9. Map data structure](./9-groceries_list.js)

Introduce the Map data structure to create a groceries list.

### [10. More map data structure](./10-update_uniq_items.js)

Further manipulate the Map data structure by updating unique items.

### [11. Weak link data structure](./100-weak.js)

Understand and implement the WeakMap data structure.

---

## Author Information

- **Author:** Alexander Udeogaranya
- **Email:** ogranya.alex@gmail.com
- **GitHub Repo:** [ES6 Data Manipulation](https://github.com/Dr-dyrane/alx-frontend-javascript/blob/main/0x03-ES6_data_manipulation/README.md)