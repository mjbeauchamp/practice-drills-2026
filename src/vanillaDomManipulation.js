const dummyData = [
    {
        species: 'Fox',
        habitat: 'forest'
    },
    {
        species: 'Lion',
        habitat: 'grassland'
    },
    {
        species: 'Dolphin',
        habitat: 'ocean'
    },
    {
        species: 'Nudibranch',
        habitat: 'tide pools'
    },
    {
        species: 'Bear',
        habitat: 'alpine forest'
    },
]

export function vanillaDomManipulation() {
//    WRITE YOUR CODE HERE!!!
}


// WORKING SOLUTION:





// export function vanillaDomManipulation() {
//     const dummyData = [
//         {
//             species: 'Fox',
//             habitat: 'forest'
//         },
//         {
//             species: 'Lion',
//             habitat: 'grassland'
//         },
//         {
//             species: 'Dolphin',
//             habitat: 'ocean'
//         },
//         {
//             species: 'Nudibranch',
//             habitat: 'tide pools'
//         },
//         {
//             species: 'Bear',
//             habitat: 'alpine forest'
//         },
//     ]

//     // IMPORTANT: using .innerHtml is a fine and easy way to do things if you're working with static HTML content
//     document.querySelector('#app').innerHTML = `
//     <div>
//         <h1>FAVORITE ANIMALS</h1>
//         <div>
//             <p>Most Favorite: <span id="favorite-animal"></span></p>
//         </div>
//         <ul id="animal-list"></ul>
//     </div>
//     `

//     const unorderedList = document.querySelector('#animal-list');
//     const favoriteTextEl = document.querySelector("#favorite-animal");

//     // IMPORTANT: using the DOM API (.createElement, .appendChild, etc) is considered cleaner best practice and
//     // safer when working with dynamic data
//     dummyData.forEach(data => {
//         const listItem = document.createElement('li');
//         const button = document.createElement('button')
//         const title = document.createElement('h2');
//         const text = document.createElement('p');

//         title.textContent = data.species;
//         text.textContent = data.habitat;

//         button.appendChild(title);
//         button.appendChild(text);
//         button.addEventListener('click', () => {
//             updateFavorite(data.species)
//         });
//         button.setAttribute('aria-label', `Set favorite animal to ${data.species}`);

//         listItem.appendChild(button)
        
//         unorderedList.appendChild(listItem);
//     })

//     function updateFavorite(animalName) {
//         favoriteTextEl.textContent = animalName;
//         console.log('INFO: ', animalName)
//     }
// }

