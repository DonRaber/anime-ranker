// FETCH
fetch("./db.json")
    .then((resp) => resp.json())
    .then((data) => renderCompanies(data))

const animeCom = document.getElementById('animeCompanies')
const centerImage = document.getElementById('studioImgDisplay')


// RENDERS

function renderCompanies(studios) {
    const studioCom = studios.company;
    studioCom.forEach((studio) => {
    const studioList = document.createElement('li')
    studioList.textContent = studio.name;
    animeCom.append(studioList)
    studioList.addEventListener('click', (e) => {
        centerImage.src = studio.image
    })
    })
}


// EVENT LISTENERS

console.log('hi')


//One Piece Lofi Volume

const music = document.querySelector('#music');

music.volume = 0;
