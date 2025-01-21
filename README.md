# Unexpected Type Coercion in JavaScript

This repository demonstrates a common but subtle error in JavaScript related to type coercion.  The `+` operator in JavaScript behaves differently depending on the types of its operands.  When one operand is a string, it performs string concatenation, which can lead to unexpected results if you're expecting numerical addition.

## Bug

The `bug.js` file contains a function `foo` that adds two numbers. However, it incorrectly handles the case where one of the arguments is a string.  This leads to string concatenation rather than numerical addition.

## Solution

The `bugSolution.js` file provides a corrected version of the function that explicitly checks for the types of inputs and handles them appropriately. It uses `typeof` to determine if both are numbers and then casts to a number for type safety.  If one input is not a number the function returns NaN.