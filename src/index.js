console.log('%c HI', 'color: firebrick')

// Challenge 1

fetch("https://dog.ceo/api/breeds/image/random/4")
    .then((resp) => resp.json())
    .then((data) => renderImages(data))

function renderImages(objStoringUrls) {

    urlArr = objStoringUrls.message

    const imgContainer = document.querySelector('#dog-image-container')
    
    console.log(objStoringUrls)
    
    urlArr.forEach((url) => {
        const img = document.createElement('img')
        img.src = url
        imgContainer.appendChild(img)
    })
}

// Challenge 2 

fetch("https://dog.ceo/api/breeds/list/all")
    .then((resp) => resp.json())
    .then((data) => renderBreedNames(data))

function renderBreedNames(objStoringBreeds) {
    breedObj = objStoringBreeds.message
//  console.log(Object.keys(breedObj))
    breedArr = Object.keys(breedObj)

    const breedContainer = document.querySelector('#dog-breeds')

    breedArr.forEach((breed) => {
        const li = document.createElement('li')
        li.textContent = breed
        breedContainer.appendChild(li)

// Challenge 3

        li.addEventListener('click', () => li.style.color = 'salmon')
    })


// Challenge 4

    const dropdown = document.querySelector('#breed-dropdown')

    dropdown.addEventListener('change', (e) => handleSelectBreed(e))

    function handleSelectBreed(e) {

        breedContainer.textContent = ""

//      console.log(e.target.value);

        const filteredBreeds = breedArr.filter((breed) => {
        
            if (breed.charAt(0) === e.target.value) {
                return true
            }
            else {
                return false
            }
        })

        filteredBreeds.forEach((breed) => {
            const li = document.createElement('li')
            li.textContent = breed
            breedContainer.appendChild(li)

            li.addEventListener('click', () => li.style.color = 'salmon')

        })
    }
}



// document.addEventListener('DOMContentLoaded', function () {

//     loadImages();
//     loadBreedOptions();

// });

// function loadImages() {

//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgUrl)
//     .then(res => res.json())
//     .then(results => {
//         results.message.forEach(image => addImage(image))

//     });
// }

// function addImage(dogPicUrl) {

//     let container = document.querySelector('#dog-image-container');

//     let newImageEl = document.createElement('img');
//     newImageEl.src = dogPicUrl;

//     container.appendChild(newImageEl);
// }

// let breeds = [];

// function loadBreedOptions() {

//     const breedUrl = "https://dog.ceo/api/breeds/list/all";
//     console.log(breedUrl);

//     fetch(breedUrl)
//     .then(res => res.json())
//     .then(results => {
//         breeds = document.getElementsByTagName("ul");
//         updateBreedList(breeds);
//         addBreedSelectListener();
//     })
// }


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