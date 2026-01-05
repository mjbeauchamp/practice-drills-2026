import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import { textEditorTestRun } from './editFunctionalityDrill.js'
import { getSharedCoursePairings } from './dataManipulationDrill.js'

// document.querySelector('#app').innerHTML = `
//   <div>
//     <a href="https://vite.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `
// setupCounter(document.querySelector('#counter'))




// TEXT EDITOR DRILL
// textEditorTestRun();

// DATA MANIPULATION DRILL
const enrollments1 = [
 ["58", "Linear Algebra"],
 ["94", "Art History"],
 ["94", "Operating Systems"],
 ["17", "Software Design"],
 ["58", "Mechanics"],
 ["58", "Economics"],
 ["17", "Linear Algebra"],
 ["17", "Political Science"],
 ["94", "Economics"],
 ["25", "Economics"],
 ["58", "Software Design"],
]

// console.log(getSharedCoursePairings(enrollments1));

