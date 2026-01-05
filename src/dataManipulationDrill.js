// Write a function that takes in a collection of (student ID number, course name) pairs and returns, 
// for every pair of students, a collection of all courses they share.
// BONUS: WRITE THIS FIRST USING ALL OBJECTS AND ARRAYS
// THEN DO A SIMILAR VERSION WHERE YOU STILL RETURN A FINAL OBJECT CONTAINING ARRAY VALUES, BUT FOR
// THE INTERMEDIARY DATA SCRAPING STEPS YOU USE MAPS AND SETS INSTEAD OF OBJECTS AND ARRAYS

// Sample Input:

// enrollments1 = [
//  ["58", "Linear Algebra"],
//  ["94", "Art History"],
//  ["94", "Operating Systems"],
//  ["17", "Software Design"],
//  ["58", "Mechanics"],
//  ["58", "Economics"],
//  ["17", "Linear Algebra"],
//  ["17", "Political Science"],
//  ["94", "Economics"],
//  ["25", "Economics"],
//  ["58", "Software Design"],
// ]

// Sample Output (pseudocode, in any order):

// find_pairs(enrollments1) =>
// {
//  "58,17": ["Software Design", "Linear Algebra"]
//  "58,94": ["Economics"]
//  "58,25": ["Economics"]
//  "94,25": ["Economics"]
//  "17,94": []
//  "17,25": []
// }





// SOLUTIONS:




// WORKING OBJECT/ARRAY VERSION

// export function getSharedCoursePairings(studentEnrollments) {
//     const studentClassLists = {};

//     studentEnrollments.forEach(enrollment => {
//         const [studentId, courseName] = enrollment;

//         if (!studentClassLists[studentId]) {
//             studentClassLists[studentId] = [];
//         }

//         studentClassLists[studentId].push(courseName);
//     })

//     const studentPairs = {};

//     const studentIds = Object.keys(studentClassLists);

//     for (let i = 0; i < studentIds.length; i++) {
//         const currentStudentId = studentIds[i];
//         const currentStudentClasses = studentClassLists[currentStudentId];

//         for (let j = i + 1; j < studentIds.length; j++) {
//             const comparisonStudentId = studentIds[j];
//             studentPairs[`${currentStudentId},${comparisonStudentId}`] = studentClassLists[comparisonStudentId].filter(course => currentStudentClasses.includes(course))
//         }
//     }

//     return studentPairs;
// }   



// WORKING MAP/SET VERSION - More efficient because of direct lookups

// export function getSharedCoursePairings(studentEnrollments) {
//     const studentClassLists = new Map();

//     for (const [studentId, course] of studentEnrollments) {
//         if (!studentClassLists.has(studentId)) {
//             studentClassLists.set(studentId, new Set())
//         }

//         // Using .add on Set value, to create a set of the student's courses
//         studentClassLists.get(studentId).add(course);
//     }

//     // We're creating an array of studentId values here, so that we can do a tracked
//     // nested loop system where we compare each studentId to every other studentId efficiently
//     const studentIds = Array.from(studentClassLists.keys());
//     const studentPairs = {};

//     console.log(studentClassLists)

//     for (let i = 0; i < studentIds.length; i++) {
//         const currentStudentId = studentIds[i];
//         const currentStudentClasses = studentClassLists.get(currentStudentId);

//         for (let j = i + 1; j < studentIds.length; j++) {
//             const comparisonStudentId = studentIds[j];
//             const comparisonStudentClasses = studentClassLists.get(comparisonStudentId);
//             const sharedCourses = [];

//             // for...of loops work well with sets, and it works here because 
//             // we don't need indexing
//             for (const course of currentStudentClasses) {
//                 if (comparisonStudentClasses.has(course)) {
//                     sharedCourses.push(course);
//                 }
//             }

//             studentPairs[`${currentStudentId},${comparisonStudentId}`] = sharedCourses;
//         }
//     }

//     return studentPairs;
// }   