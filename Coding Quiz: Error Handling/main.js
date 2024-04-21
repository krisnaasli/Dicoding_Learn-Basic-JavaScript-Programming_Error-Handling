
/**
 * By now, you already have the detectTriangle function which is useful for
 * detect the type of triangle based on the argument value.
 * Example:
 * - 1, 1, 1 -> Equilateral triangle
 * - 4, 4, 2 -> Isosceles triangle
 * - 3, 4, 6 -> Arbitrary triangle
 *
 * However, the detectTriangle function does not work properly because
 * if any function argument is not a number, instead of error, it will return "Arbitrary triangle".
 * Example:
 * - 1, false, 1 -> Arbitrary triangle
 * - 'a', 3, 5 -> Arbitrary triangle
 * - 12, 2, null -> Arbitrary triangle
 * Expected condition:
 * - 1, false, 1 -> Second argument must be a number
 * - 'a', 3, 5 -> First argument must be number
 * - 12, 2, null -> Third argument must be number
 *
 * Your task is to fix the detectTriangle function so that it runs with the expected conditions.
 * Make sure you use Throwing and Handling Error techniques as well.
 *
 * TODO 1:
 * - Create a ValidationError class that is a custom error with the following specifications:
 * - Derived from class Error
 * - Has a constructor(message)
 * - this.name must be "ValidationError"
 *
 * TODO 2:
 * - Create a validateNumberInput function that validates 3 inputs (arguments) with the following specifications:
 * - Accepts 3 arguments
 * - If the first argument is not a number:
 * - throw ValidationError with message 'First argument must be a number'
 * - If the second argument is not a number:
 * - throw ValidationError with message 'Second argument must be a number'
 * - If the third argument is not a number:
 * - throw ValidationError with message 'Third argument must be a number'
 *
 * TODO 3:
 * - Call the validateNumberInput function inside the detectTriangle function to validate the values of arguments a, b, and c.
 * - make sure you call validateNumberInput using try.. catch.
 * - when the catch block is called, return the detectTriangle function with the error message that the validateNumberInput function carries.
 */
 
// TODO 1
class ValidationError extends Error {
    constructor(message) {
      super(message);
      this.name = "ValidationError";
    }
  }
  // TODO 2
  let validateNumberInput = (a, b ,c) => {
    if (typeof a !== 'number') {
      throw new ValidationError('The first argument must be a number');
    }
    if (typeof b !== 'number') {
      throw new ValidationError('Second argument must be number');
    }
    if (typeof c !== 'number') {
      throw new ValidationError('Third argument must be a number');
    }
  };
  const detectTriangle = (a, b, c) => {
    try {
      validateNumberInput(a, b, c);
    } catch (error) {
      return error.message;
    }
    
    // TODO 3
    if (a === b && b === c) {
      return 'Equilateral triangle';
    }
    if (a === b || a === c || b === c) {
      return 'Isosceles triangle';
    }
    return 'Arbitrary triangle';
  };
  // Testing with console.log()
  console.log(detectTriangle(1, false, 1)); // Second argument must be a number
  console.log(detectTriangle('a', 3, 5)); // First argument must be a number
  console.log(detectTriangle(12, 2, null)); // Third argument must be a number
  console.log(detectTriangle(3, 4, 6)); // An arbitrary triangle
  console.log(detectTriangle(1, 1, 1)); // Equilateral triangle
  console.log(detectTriangle(4, 4, 2)); // Isosceles triangle  