# Testing Practice with Jest (TDD approach)

Collection of JavaScript functions developed using **Test Driven Development (TDD)** with **Jest**.  
The main goal is to practice TDD concepts while creating reusable functions and ensuring that every feature is automatically tested and validated.

---

## 🚀 Technologies Used
- **JavaScript (ES6+)**
- **Jest** – Testing framework
- **Babel** – ES6 Modules support for Jest

---

## 📌 Implemented Functions
This repository includes tests and implementations for the following functions:

1. **`capitalize`**  
   - Takes a string and returns it with the first character capitalized.

2. **`reverseString`**  
   - Takes a string and returns it reversed.

3. **`analyzeArray`**  
   - Takes an array of numbers and returns an object with the following properties:
     ```js
     {
        average: <average>,
        min: <minimum value>,
        max: <maximum value>,
        length: <array length>
     }
     ```
## 🗓️ Planned Features
The following functions will be implemented in future updates:
1. **`calculator`** (object)  
   - Contains basic operations: `add`, `subtract`, `divide`, and `multiply`.  
   - Each function takes two numbers and returns the correct result.

2. **`caesarCipher`**  
   - Takes a string and a shift factor, returning the string encrypted using the Caesar cipher.  
   - Features:
     - *Wrapping* (from `z` to `a`).
     - Case preservation (uppercase/lowercase).
     - Punctuation and non-alphabetic characters remain unchanged.
