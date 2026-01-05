// Write a function that takes a JSON object and “flattens” it into a single-level key-value map. 
// Each key in the output map must represent the complete path to its value, starting from the outermost level. 
// A path is formed by joining all the parent keys that lead to a value, using a dot (.) as the separator.

// BASIC INPUT
// Your expected input will be a valid JSON object of key value pairs ({}).
const input = {
 "a": {
   "b": {
     "c": 1,
     "e": {
       "f": 2
     }
   },
   "g":  3
 },
 "d": "hello"
}

// Output
// A flattened JSON object where all keys exist on a single level. Here are some examples:
// Key Value Pair Object examples
// For a nested object, append the key path to the parent level:

// { 'a.b.c': 1, 'a.b.e.f': 2, 'a.g': 3, d: 'hello' }


// Or you can have an empty object:
// Input
const input2 = {}  


// Output
// {}

export function recursiveFlattenObject() {
  // console.log(flattenObject(input));
  // console.log(flattenObject(input2));
}

function flattenObject() {
  //WRITE YOUR CODE HERE


  
}




// WORKING SOLUTION:
// function flattenObject(nestedObject, keyName = '', flatObject = {}) {
//   if (!nestedObject || typeof nestedObject !== 'object' || Array.isArray(nestedObject)) {
//     return flatObject;
//   }

//   for (const key of Object.keys(nestedObject)) {
//     const newKeyName = keyName ? `${keyName}.${key}` : key;
//     const currentValue = nestedObject[key];

//     if (typeof currentValue === 'object' && !Array.isArray(currentValue)) {
//       flattenObject(currentValue, newKeyName, flatObject)
//     } else {
//       flatObject[newKeyName] = currentValue
//     }
//   }

//   return flatObject;
// }
