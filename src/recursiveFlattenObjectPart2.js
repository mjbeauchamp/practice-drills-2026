// RECURSIVE FLATTENING PART TWO:
// Update your recursiveFlattenObject function to handle arrays according to the following rules:

// When processing the input, if you encounter an array:
// Flatten Objects within the Array: Any objects found inside the array should be flattened recursively. 
// The path for these flattened keys should be prefixed with the parent key of the array.

// Collect Primitive Values: All other values (strings, numbers, booleans, null) should be collected into a new array. 
// This new array should be assigned to the original array’s parent key.

// If an array contains only primitive values, the output for that key will be the original array.

// // Input
const input = {
  "user": {
    "name": "Sam",
    "metadata": [{"is_admin": true }, true, "admin"]
  }
}

// // Output
// {
//   "user.name": "Sam",
//   "user.metadata.is_admin: true,
//   "user.metadata": [true, "admin"]
// }

// Array of Only Primitive Types
// // Input
const input2 = {
  "user": {
    "name": "Sam",
    "roles": ["admin", "editor"]
  }
}

// // Output
// {
//   "user.name": "Sam",
//   "user.roles": ["admin", "editor"],
// }

// Complex Nesting with Arrays
// This example includes an array at the root level and a nested array.
// // Input
const input3 = {
  "data": [
    10,
    { 
        "id": 123, 
        "tags": [
            "red", 
            "blue", 
            [
                "your mom", 
                {doNotFlatten: 'This object should not get flattened, because it is inside an array that is nested directly within another array'}
            ]
        ]
    },
    true
  ]
}

// // Output
// {
//   "data": [10, true],
//   "data.id": 123,
//   "data.tags": ["red", "blue"],
// }



export function recursiveFlattenObjectPart2() {
    console.log(flattenObject(input));
    console.log(flattenObject(input2));
    console.log(flattenObject(input3));
}

function flattenObject() {
    //WRITE YOUR CODE HERE!
}









// WORKING SOLUTION
// function flattenObject(nestedObject, keyName = '', flatObject = {}) {
//   if (!nestedObject || typeof nestedObject !== 'object') {
//     return flatObject;
//   }

//   for (const key of Object.keys(nestedObject)) {
//     const newKeyName = keyName ? `${keyName}.${key}` : key;
//     const currentValue = nestedObject[key];

//     if (currentValue && typeof currentValue === 'object') {
//         if (Array.isArray(currentValue)) {
//             const primitiveValues = [];

//             currentValue.forEach(val => {
//                 if (val && typeof val === 'object' && !Array.isArray(val)) {
//                     flattenObject(val, newKeyName, flatObject)
//                 } else {
//                     primitiveValues.push(val)
//                 }
//             })

//             if (primitiveValues.length > 0) {
//                 flatObject[newKeyName] = primitiveValues;
//             }
//         } else {
//             flattenObject(currentValue, newKeyName, flatObject)
//         }
//     } else {
//       flatObject[newKeyName] = currentValue
//     }
//   }

//   return flatObject;
// }
