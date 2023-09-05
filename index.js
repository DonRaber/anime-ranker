// FETCH
fetch("./db.json")
    .then((resp) => resp.json())
    .then((data) => renderCompanies(data))

// GLOBAL SCOPE

const animeCom = document.getElementById('animeCompanies')
const centerImage = document.getElementById('studioImgDisplay')
const centerName = document.getElementById('studioNameDisplay')
const centerYear = document.getElementById('yearDisplay')


// RENDERS

function renderCompanies(studios) {

    const studioCom = studios.company

    studioCom.forEach((studio) => {

        const studioList = document.createElement('li')
        studioList.textContent = studio.name
        animeCom.append(studioList)
        const animeDisp = document.getElementById('animeDisplay')
        const animeLi = studio.anime

        studioList.addEventListener('click', (e) => {

            
            centerImage.src = studio.image
            centerName.textContent = studio.name
            centerYear.textContent = studio.founded
            
            
            animeLi.forEach((anime) => {
                const animeMain = document.querySelectorAll('.animeThumbnail')
                const animeImg = document.querySelectorAll('.animeThumbnail > img')
                animeImg.src = anime.image

                animeMain.replaceChild("", animeImg)

                
            })


        })
    })
}


// EVENT LISTENERS

console.log('hi')


//One Piece Lofi Volume

const music = document.querySelector('#music');

// music.volume = 0;
