# MongoDB $inc Operator Error
This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The `$inc` operator is used to increment or decrement a numerical value in a document. However, attempting to increment a non-numerical field will result in an error.

## Bug
The `bug.js` file contains code that attempts to increment a string field using the `$inc` operator. This results in an error because the `$inc` operator only works with numerical values.

## Solution
The `bugSolution.js` file shows the correct way to use the `$inc` operator.  Ensure the field you are incrementing is a number. If you need to convert a field from string to number, perform the conversion before the update operation.

## How to reproduce
1. Clone this repository
2. Run `bug.js`
3. Observe the error message.
4. Run `bugSolution.js`
5. Observe the successful update.