console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', function () {

    loadImages();
    loadBreedOptions();

});

function loadImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(res => res.json())
    .then(results => {
        results.message.forEach(image => addImage(image))
    });
}

function addImage(dogPicUrl) {

    let container = document.querySelector('#dog-image-container');

    let newImageEl = document.createElement('img');
    newImageEl.src = dogPicUrl;

    container.appendChild(newImageEl);
}

let breeds = [];

function loadBreedOptions() {

    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    console.log(breedUrl);

    fetch(breedUrl)
    .then(res => res.json())
    .then(results => {
        breeds = document.getElementsByTagName("ul");
        updateBreedList(breeds);
        addBreedSelectListener();
    })
}



























// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

// addEventListener

// fetch(imgUrl)


// // console.log(imgUrl);

//     .then((resp) => resp.json())
//     .then((data) =>imageGetter((data)
//     ))

//     // add image elements to the dom 

//     // add event listener to 
//     //for each element of the array

// const newvar = fetchImage(imgUrl);
// console.log(newvar);

//     forEach()

//         images.forEach((image) => {
//         copyImage.push(image);
//         });
        
// }